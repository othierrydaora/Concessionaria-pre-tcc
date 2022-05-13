import './Footer.scss';


export default function Footer() {
    return (
        <footer class="cm-footer">
                <div class="footer-column">
                    <div className="footer-column-name">Desenvolvedores</div>
                    <ul class="dev-names">
                        <a href="https://github.com/othierrydaora"><li>Thierry</li></a>
                        <a href="https://github.com/eoqthiago"><li>Thiago</li></a>
                    </ul>
                    <ul class="dev-names">
                        <a href="https://github.com/Mr-auskye"><li>Nicholas</li></a>
                        <li>Matheus</li>
                    </ul>
                    <ul class="dev-names">
                        <a href="https://github.com/DOLK2K"><li>Vinicius</li></a>
                        <li>Rodrigo</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <div className="footer-column-name">Contato</div>
                    <ul>
                        <a href="mailto:sigmacarros@outlook.com"><li>sigmacarros@outlook.com</li></a>
                        <li>Tel: (11) 9999-99999</li>
                        <li>Av. Constelar, 401</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <div className="footer-column-name">Mais</div>
                    <ul>
                        <li>Sobre</li>
                        <li>Segurança</li>
                        <li>Ajuda</li>
                    </ul>
                </div>
        </footer>
    );
}
