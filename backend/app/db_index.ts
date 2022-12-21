const { MongoClient } = require('mongodb');

export async function listDatabases(client: any){
    let databasesList = await client.db().admin().listDatabases();
    return databasesList.databases
};

export async function useDb(USER: string, PWD: string, cb: any){

    const uri: string = `mongodb://${USER}:${PWD}@localhost/kralovec-minecraft`;
  
    const client = new MongoClient(uri);
  
    try {
        await client.connect((err:any) => {
            if (err){
                console.log("DB ERROR: \n\n\n\n")
                console.log(err)
            }
            
        });
        let list = await cb(client);
        return list;
  
    } catch (e) {
        console.error(e);
    } 
  }