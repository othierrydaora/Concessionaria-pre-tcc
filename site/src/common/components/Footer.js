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
                    </ul>
                    <ul class="dev-names">
                        <a href="https://github.com/DOLK2K"><li>Vinicius</li></a>
                        <a href="https://github.com/RodrigoDig"><li>Rodrigo</li></a>
                    </ul>
                </div>
                <div class="footer-column">
                    <div className="footer-column-name">Contato</div>
                    <ul>
                        <a href="mailto:sigmacarros@outlook.com"><li>sigmacarros@outlook.com</li></a>
                        <li>Tel: (11) 99999-9999</li>
                        <li>Av. Constelar, 401</li>
                    </ul>
                </div>
        </footer>
    );
}
