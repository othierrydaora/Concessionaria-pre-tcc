import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.scss';

export default function Home() {
    return (
        <div>
        <div className='hm-home'>
            <Header login='show' contact='show' info='show'/>

            <main>
                <section className='inicial' id='inicial'>
                    <div className='card'>
                        <div className='inicial-title'>Conheça a Concessionária Sigma</div>
                        <div className='presentation-text'>
                            Aqui na Sigma, você encontra vendedores totalmente preparados para te ajudar com todas as etapas da compra de um carro de luxo, desde a escolha até a papelada, além de uma ótima gama de marcas e modelos.
                        </div>
                        <a href='#info'><button className='presentation-btn'>Descobrir</button></a>
                    </div>
                </section>


                <section className='page-one' id='info'>
                    <div className='titles'>
                        <h2 className='p1-subtitles'>900 HP 6.8 SUPERCHARGED V8</h2>
                        <h1>FASTEST OF THE PACK</h1>
                        <p className='p1-para'>MSRP 569,096 / MSRP TACK PACK 76,983 </p>
                        <a className='p1-text' href='https://en.wikipedia.org/wiki/BMW_M6'>Saiba mais</a>

                        <div className='redes-sociais'>
                            <i className='hm-social-icons fa fa-instagram'></i>
                            <i className='hm-social-icons fa fa-facebook'></i>
                            <i className='hm-social-icons fa fa-twitter'></i>
                        </div>
                    </div>
                    <img src='/assets/images/hm-car.png' className='car' alt='Bmw M6' />
                </section>


                <section className='page-two'>
                    <img src='/assets/images/hm-car2.png' className='car2' alt='Bmw M6' />

                    <div className='title-two'>
                        <div className='pg2-title'>
                            <div style={{color: '#5e72e4'}}> BMW M6 </div>
                            GRAND COUPE
                        </div>
                        <div className='pg2-paraph'>O BMW M6 é uma versão de alto desempenho do coupé / conversível da Série 6, projetado e desenvolvido pela divisão de automobilismo da BMW.</div>
                    </div>
                </section>


                <section className='page-three'>
                    <div className='pg3-texts'>
                        <div className='pg3-texts-title'>Uma extensa variedade de modelos à sua escolha</div>
                        <a href='#contato'><button className='pg3-texts-button'>Entre em contato</button></a>
                    </div>
                </section>


                <section className='page-four'>
                    <div className='pg4-card'>
                        <div className='pg4-texts'>
                            <div className='pg4-texts-title'>Oportunidades únicas</div>
                            <div className='pg4-texts-lbl'>Aqui na Concessionária Sigma você pode aproveitar grandes oportunidades de compra</div>
                        </div>
                        <img src='/assets/images/grandcoupe.png' alt='' className='pg4-left-img'/>
                    </div>

                    <div className='pg4-card'>
                        <img src='/assets/images/grandcouperr.png' alt='' className='pg4-right-img'/>
                        <div className='pg4-texts'>
                            <div className='pg4-texts-title'>Faça um Test Drive</div>
                            <div className='pg4-texts-lbl'>Você pode fazer diversos Test Drives e descobrir qual é o seu carro ideal</div>
                        </div>
                    </div>
                </section>


                <section className='page-contato' id='contato'>
                    <form action='' id='formulario' className='card-form'>
                        <div className='hm-form-title'>Nos envie uma mensagem!</div>
                        <input className='email' id='nome' type='text' name='name' placeholder='Digite Seu Nome' />
                        <input className='email' id='useremail' type='email' name='email' placeholder='Insira seu melhor email' />
                        <textarea className='email msg-form' name='message' id='message' placeholder='Mensagem'></textarea>
                        <button id='button-contact' className='contact-btn'>Enviar</button>
                    </form>
                    
                </section>
            </main>
            <Footer/>
        </div>
    </div>
    );
}
