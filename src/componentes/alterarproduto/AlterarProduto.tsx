import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
function AlterarProduto(){
    const {id} = useParams()
    const navigate = useNavigate();
        const [descricao,setDescricao] = useState("")
        const [nome,setNome] = useState("")
        const [preco,setPreco] = useState("")
        const [imagem,setImagem] = useState("")
    
        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Tentei cadastrar produtos");
            const produto = {
                nome: nome,
                descricao: descricao,
                preco: preco,
                imagem: imagem
            }
            fetch(`http://localhost:8000/produtos/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produto)
            }).then(response => {
                if(response.status === 200){
                    alert("Produto alterado com sucesso")
                    navigate("/")
                }
                else{
                    alert("Erro ao alterar produto")
                }
            })
        }
        function handleDescricao(event:ChangeEvent<HTMLInputElement>){
            setDescricao(event.target.value)
        }
        function handlePreco(event:ChangeEvent<HTMLInputElement>){
            setPreco(event.target.value)
        }
        function handleNome(event:ChangeEvent<HTMLInputElement>){
            setNome(event.target.value)
        }
        function handleImagem(event:ChangeEvent<HTMLInputElement>){
            setImagem(event.target.value)
        }
    
    return (
        <>
            <div>Alterar Produto {id}</div>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" value={id} readOnly />
                </div>
                <div>
                    <label htmlFor="nome">nome</label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="descricao">descricao</label>
                    <input type="text" name="descricao" onChange={handleDescricao} />
                </div>
                <div>
                    <label htmlFor="preco">preço</label>
                    <input type="text" name="preco" onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">imagem</label>
                    <input type="text" name="imagem" onChange={handleImagem}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}

export default AlterarProduto;