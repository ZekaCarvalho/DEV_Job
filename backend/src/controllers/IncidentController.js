const connection = require('../database/connection');

module.exports = {

  async listAll(request, response){
    const { page = 1 } = request.query;

    /** 
     * o uso de [] é recomendado pois o método retorna uma coleção, o uso de [] 
     * exibe o índice zero desta coleção, que nesse caso é uma coleção 
     * composta por apenas um valor.
     **/
    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5) // Retorna 5 registros por vez
      .offset((page - 1) * 5) //Pula 5 registros a cada página
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);


      response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents); 
  },
  async create(request, response){
    const { title, description, value }  = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  async delete(request, response){

    const { id } = request.params;
    const ong_id = request.headers.authorization;


    /** 
     * Os passos abaixo são para verificar se o Incident (Caso) foi 
     * criado pela Ong que está solicitando a operação
    */

      //Passo 1: Retorna da base de dados o objeto com ID correspondente
      const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

      // Passo 2: Verifica se o objeto retornado foi criado pelo objeto que 
      // solicitou a operação 
      if (incident.ong_id !== ong_id){
        return response.status(401).json({ error : 'Operation not permitted' });
      }

      await connection('incidents').where('id', id).delete();

      return response.status(204).send();
  }

};