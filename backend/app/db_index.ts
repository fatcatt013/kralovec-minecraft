const { MongoClient } = require('mongodb');

async function listDatabases(client: any){
    let databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach((db:any) => console.log(` - ${db.name}`));
};

export async function main(USER: string, PWD: string){

    const uri: string = `mongodb://${USER}:${PWD}@localhost/kralovec-minecraft`;
  
    const client = new MongoClient(uri);
  
    try {
        await client.connect((err:any) => {
            if (err){
                console.log("DB ERROR: \n\n\n\n")
                console.log(err)
            }
            
        });
        await listDatabases(client);
  
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
  }