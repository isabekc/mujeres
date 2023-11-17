
import serviceImage1 from './imagens/IMAGEM1.jpg';
import serviceImage2 from './imagens/imagem2.jpg';
import serviceImage3 from './imagens/imagem3.png';

function PaginaInicial(){
    return(
        <section class="services">
            <div class="service-card">
            <img className="service-image" src={serviceImage1} alt= "Serviço 1"/>
                <h2>Serviço 1</h2>
                <p>Descrição do serviço 1.</p>
            </div>


            <div class="service-card">
            <img className="service-image" src={serviceImage2} alt= "Serviço 2"/>
                <h2>Serviço 2</h2>
                <p>Descrição do serviço 2.</p>
            </div>


            <div class="service-card">
            <img className="service-image" src={serviceImage3} alt= "Serviço 3"/>
                <h2>Serviço 3</h2>
                <p>Descrição do Serviço 3.</p>
            </div>
        </section>
    );
}
export default  PaginaInicial;