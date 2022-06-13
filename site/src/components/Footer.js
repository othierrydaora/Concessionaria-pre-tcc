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
                        <a href="https://github.com/DoctorRedacted"><li>Nicholas</li></a>
                        <a href="https://github.com/RodrigoDig"><li>Rodrigo</li></a>
                    </ul>
     
                </div>
                <div class="footer-column">
                    <div className="footer-column-name">Contato</div>
                    <ul>
                        <a href="mailto:sigmacarros@outlook.com"><li>sigmacarros@outlook.com</li></a>
                        <li>Tel: (11) 99999-9999</li>
                        <a href='https://www.google.com/maps/place/Sigma+Veiculos/@-23.6071981,-46.946096,20z/data=!4m9!1m2!2m1!1sconcessionaria+sigma!3m5!1s0x94cf079cb727dc69:0xd5b7b99a016edfb9!8m2!3d-23.6071981!4d-46.9456753!15sChRjb25jZXNzaW9uYXJpYSBzaWdtYVoWIhRjb25jZXNzaW9uYXJpYSBzaWdtYZIBFG1vdG9yX3ZlaGljbGVfZGVhbGVy'><li>Av. Prof. Joaquim Barreto, 1411</li></a>
                    </ul>
                </div>
        </footer>
    );
}
