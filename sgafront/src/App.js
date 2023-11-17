import React, {useState, useEffect } from "react";
import "./App.css";
import {FontAwesomeIcon}  from "Gfortawesome/react-fontawesome";
import {faEdit, faTrash} from "Gfortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes }from "react-router-dom";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
return (
<Router>
<div className="App">
<NavBar />
<div className="content">
<Sidebar/>
<main>
<Routes>
<Route path="/home" element={<Home />} />
<Route path="/ambientes" element={<Ambientes />} />
<Route path="/usuarios" element={<Usuarios />} />
<Route path="/ativos" element={<Ativos />} />
<Route path="/categorias" element={<Categorias />} />
</Routes>
</main>
</div>
<Footer />
</div>
</Router>
);
}

function Ativos() {
  const [ativos, setAtivos] = usestate([]);
  const [isloading, setIsLoading] = useState(false);
  const [isAddingAtivo, setIsAddingativo] = usestate(false);
  const [editingAtivo, setEditingAtivo] = useState(null);
  const [nomeAtivo, setNomeAtivo] = usestate("");
  const [idAtivo, setIdAtivo] = usestate("");
  const [descricaoAtivo, setDescricaoAtivo] = usestate("");
  const [marcaAtivo, setMarcaAtivo] = useState("");
  const [nsAtivo, setNsAtivo] = usestate("");
  const [categoriaId, setCategoriaId] = useState("");
  const [ambienteId, setAambienteId] = usestate("");
  const [criadoPor, setCriadoPor] = usestate("");
  const [ambientesList, setambientesList] = usestate([]);
  const [categoriasList, setCategoriasList] = usestate([]);
  const [selecionadoUsuario, setSelecionadoUsuario] = usestate("");
  const [usuariosList, setusuariosList] = usestate([]);
  
  useEffect ( () => {
    fetchAtivosData();
    fetchambientesList();
    fetchCategoriasList();
    fetchusuariosList();
    }, []);
    const fetchambientesList = async () => {
    setIsLoading(true);
    
    try{
    const response = await fetch("http://localhost:8080/api/ambientes");
    if (!response.ok) {
    throw new Error("Erro ao buscar ambientes.");
    }
    const data = await response.json();
    setambientesList(data);
    } catch (error) {
    console .error("Erro ao buscar ambientes:", error);
    } finally {
    setIsLoading(false);
    }
    };

    const fetchCategoriasList = async () => {
      setIsLoading(true);
    
    
    try {
      const response = await fetch("http://localhost/api/categorias");
      if (!response.ok){
        throw new Error("Erro ao buscar categorias.");
      }
      const data = await response.json();
      setCategoriasList(data);
    }catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }finally {
      setIsLoading(false);
    }
  };

  const fetchUsuariosList = async () => {
    setIsLoading(true);
    
    try {
    const response = await fetch("http://localhost/api/usuarios");
    if (!response.ok) {
    throw new Error("Erro ao buscar usuários.");
    }
    const data = await response.json();
    setUsuariosList(data);
    } catch (error) {
    console .error("Erro ao buscar usuários:", error);
    }finally {
    setIsLoading(false);
    }
    };
    
    const fetchAtivosData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/ativos");
      if (!response.ok) {
      throw new Error("Erro ao buscar ativos.");
      }
      const data = await response.json();
      setAtivos(data);
      } catch (error) {
      console .error("Erro ao buscar ativos:", error);
      } finally {
      setIsLoading(false);
      }
      };

      const handleAddAtivoClick = () => {
        setIsAddingAtivo(true);
        };
        const handleCancelAtivoClick = () => {
        setIsAddingAtivo(false);
        setEditingAtivo(null);
        };
        const handleSaveAtivoClick = async () => {
        if (
        !nomeAtivo.trim() ||
        IdescricaoAtivo.trim() ||
        ImarcaAtivo.trim() ||
        InsaAtivo.trim() ||
        IcategoriaId ||
        lambienteId ||
        !selecionadoUsuario
        ) {
        alert("Por favor, preencha todos os campos.");
        return;
        }
        const novoAtivo = {
        nomeAtivo,
        descricaoAtivo,
        marcaAtivo,
        nsAtivo,
        categoria: {idCategoria: categoriaId },
        ambiente: {idAmbiente: ambienteId},
        criadoPor: {idUsuario: selecionadoUsuario},
        };
// linha 164
