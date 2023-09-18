import { Link } from 'react-router-dom'

export default function footer (){

        return(

            <div>

                    <img src='/assets/images/Mini_Logo.png' />

                    <Link to='/'>A NaturalMente |</Link>
                    <Link to='/'>produtos º |</Link>
                    <Link to='/'>Lojas |</Link>
                    <Link to='/'>Contato</Link>
                    <Link to='/PrivacyPolicy'>Política de Privacidade</Link>
            </div>

        );

}