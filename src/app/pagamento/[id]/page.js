import db from "@/lib/db";

export default async ({params}) => {
    const pagamento = await db.query(
        "select * from pagamentos where id = "+params.id
    );
    return (
        <>
            <h1>Página do aluno: 
                {pagamento.rows[0].data}</h1>
            <p>o aluno faz parte do projeto 
                {pagamento.rows[0].status}
            </p>
        </>
    )
}