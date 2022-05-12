import Header from '../../common/components/Header';


import './index.scss';

export default function Home() {
    return (
        <div className="hm-home">
            <Header />

            <main>
                <section className="inicial" id="inicial">
                    <div className="card">
                        <div className="inicial-title">Conheça a Concessionária Sigma</div>

                        <div className="presentation-text">
                            Aqui na Sigma, você encontra vendedores totalmente preparados para te ajudar com todas as etapas da compra de um carro de luxo, desde a escolha até a papelada, além de uma ótima gama de marcas e modelos.
                        </div>
                        
                        <a href="#info"><button className="presentation-btn">Descobrir</button></a>
                    </div>
                </section>


                <section className="page-one" id="info">
                    <div className="titles">
                        <h2 className="p1-subtitles">900 HP 6.8 SUPERCHARGED V8</h2>
                        <h1>FASTEST OF THE PACK</h1>
                        <p className="p1-para">MSRP 569,096 / MSRP TACK PACK 76,983 </p>
                        <a className="p1-text" href="https://en.wikipedia.org/wiki/BMW_M6">Saiba mais</a>

                        <div className="redes-sociais">
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                        </div>
                    </div>
                        
                    <img src="./images/hm-car" />           

                </section>

                <section className="page-two">



                    <div className="title-two">
                        <div className="pg2-title">
                            <div style={{color: '#5e72e4'}}> BMW M6 </div>
                            GRAND COUPE
                        </div>
                        <div className="pg2-paraph">O BMW M6 é uma versão de alto desempenho do coupé / conversível da Série 6, projetado e desenvolvido pela divisão de automobilismo da BMW.</div>
                        <button className="pg2-btn"><a href="https://en.wikipedia.org/wiki/BMW_M6">Saiba Mais</a></button>
                    </div>
                </section>

                <section className="page-contato" id="contato">

                    <form action="" id="formulario" className="card-form">
                        <div className="hm-form-title">Nos envie uma mensagem!</div>
                        <input className="email" id="nome" type="text" name="name" placeholder="Digite Seu Nome" />
                        <input className="email" id="useremail" type="email" name="email" placeholder="Insira seu melhor email" />
                        <textarea className="email msg-form" name="message" id="message" placeholder="Mensagem" ></textarea>
                        <button id="button-contact" className="contact-btn" href="">Enviar</button>
                    </form>

                </section>
                </main>


                <footer className="page-end">
                <div className="row-items">
                    <div className="items-1">
                        <h1>Desenvolvedores</h1>
                        <ul className="dev-names">
                            <a href="https://github.com/othierrydaora"><li>Thierry</li></a>
                            <a href="https://github.com/eoqthiago"><li>Thiago</li></a>
                        </ul>
                        <ul className="dev-names">
                            <a href="https://github.com/Mr-auskye"><li>Nicholas</li></a>
                            <li>Matheus</li>
                        </ul>
                        <ul className="dev-names">
                            <li>Vinicius</li>
                            <li>Rodrigo</li>
                        </ul>
                    </div>
                    <div className="items-1">
                        <h4>Contato</h4>
                        <ul>
                            <li>contato@sigma.com</li>
                            <li>Tel: (11) 9999-999</li>
                            <li>Av. Constelar, 401</li>
                        </ul>
                    </div>
                    <div className="items-1">
                        <h4>Mais</h4>
                        <ul>
                            <li>Sobre</li>
                            <li>Segurança</li>
                            <li>Ajuda</li>
                        </ul>
                    </div>
                </div>
                </footer>
        </div>
    );
}