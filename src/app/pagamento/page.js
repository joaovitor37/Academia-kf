import db from "@/lib/db"
export default async () => {
    const pagamento = await db.query("select * from pagamentos")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         pagamento.rows.map( 
            p => (
               <div>
                  {p.data} exerce o cargo de {p.status}
               </div>
            ) 
         )
      }
   </div>
 </>);
}