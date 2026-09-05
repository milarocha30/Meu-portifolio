import { useState } from "react";

function Projetos() {
    
    //Criando uma array com os objetos
    const projetos = [
        {
            nome: "Pokémon Battle Game",
            tecnologia: "C",
            descricao:  <>
            <p>
                Jogo de batalha desenvolvido em C e inspirado em <strong>Poke Rogue</strong>. 
                O jogador monta uma equipe de Pokémon e enfrenta batalhas por turnos
                contra o computador, podendo utilizar habilidades, trocar Pokémon e
                capturar adversários.
            <br />
                Após cada vitória, recebe moedas e acesso a uma loja para adquirir
                itens e fortalecer sua equipe. Com dificuldade crescente a cada
                rodada, o jogo exige estratégias para administrar recursos e
                sobreviver ao maior número possível de batalhas.
            <br /><br />
                O projeto explora conceitos de algoritmos e estruturas de dados,
                aplicados à organização das equipes, combates e gerenciamento dos 
                recursos do jogo.
            </p>
        </>
        },

        {
            nome: "Banco de Dados — INCITE Indústria 4.0",
            tecnologia: "SQL",
            descricao: "Projeto de modelagem e implementação de banco de dados utilizando Oracle, SQL e PL/SQL, incluindo triggers, funções e regras de negócio. Desenvolvimento de um banco de dados para centralizar e organizar informações da Rede INCITE Indústria 4.0, abrangendo gestão de colaboradores, pesquisadores, projetos, recursos financeiros, estoque e processos de aquisição, incluindo o controle de despesas e a documentação associada às compras."
        },

        {
            nome: "Landing Page — Clube do Livro",
            tecnologia: "HTML/CSS",
            descricao: "Landing page desenvolvida com foco em experiência do usuário, design responsivo e comunicação visual, incentivando a leitura e a participação em comunidades literárias."
        },
        {
            nome: "BioHome App",
            tecnologia: "Outros",
            descricao: "Desenvolvimento de um aplicativo que oferece calendários personalizados de coleta seletiva conforme a localização do usuário, facilitando a organização e o descarte correto de resíduos em ambientes residenciais. O projeto busca utilizar a tecnologia para incentivar a reciclagem, promover hábitos sustentáveis e reduzir os impactos ambientais causados pelo descarte inadequado."
        }
    ];

    const [filtro, setFiltro] = useState("Todos");

    const projetosFiltrados = 
        filtro === "Todos" ? projetos : projetos.filter(projeto => projeto.tecnologia === filtro)


    return(
        <div>
            
            <div className="filtros">
                <button className={`botao-filtro ${filtro === "Todos" ? "filtro-ativo" : ""}`} onClick={()=> setFiltro("Todos")}>Todos</button>
                <button className={`botao-filtro ${filtro === "C" ? "filtro-ativo" : ""}`} onClick={()=> setFiltro("C")}>C</button>
                <button className={`botao-filtro ${filtro === "SQL" ? "filtro-ativo" : ""}`} onClick={()=> setFiltro("SQL")}>SQL</button>
                <button className={`botao-filtro ${filtro === "HTML/CSS" ? "filtro-ativo" : ""}`} onClick={()=> setFiltro("HTML/CSS")}>HTML/CSS</button>
                <button className={`botao-filtro ${filtro === "Outros" ? "filtro-ativo" : ""}`} onClick={()=> setFiltro("Outros")}>Outros</button>
            </div>


            <div className="lista-projetos">
                {projetosFiltrados.map((projeto) => (
                    <div className="card-projeto" key={projeto.nome}>
                        <h3>{projeto.nome}</h3>
                        <p>{projeto.descricao}</p>
                        <span className="tecnologia-filtro">{projeto.tecnologia}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projetos;