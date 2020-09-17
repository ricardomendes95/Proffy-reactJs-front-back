import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


interface TeacherItemProps {

}

const TeacherItem: React.FC <TeacherItemProps> = (props) => {
    return (
      <article className="teacher-item">
        <header>
          <img src="https://lh3.googleusercontent.com/QDge_LIsaZ8WpfZ9p-Tz75uoK-AVD8OMKC4VyWijROzpifNkGyyooVsMf_egFk3uPr0g8XNvI2YEIUB3-j-wo0MpcZ4nCLZVhocFqIU8Y4AMyu7MWflZf-_-LkrksORVBbh3h3Nb0Oo932Vp7tc5quMfujaFylDz694EBJSpp8YGpfbCz_76pee1GZNxoEAjId9e5owa5ajhTJi3z5gyob1itJDFsdnE2y0IC81hnipOS3eZ5_35ZuHUN_Ulcg0ncdye0z4ET9FAN4dd61uz0RvpcQUnPxKQXiovJYQlO2xeufzFXVgWyTk67THdEc6gwdxEcUbwBZdtJwENVsYmPo-4CazBi_3I7caqqjT9RORVA5Uz9_hzLg3KqHeiajyQQDfFv-cUSn_5WKd67irGS-5HqVVbM3jAdl94Z9z4Zg-RejCqSfbrX6muU70l-5DlRmfpLh7Mc7H8X8Gc7pXUSnodMPW-ltiOXMr89cdXNekEF4d_hl_4wRCC07G5evE9zEgVpNGIbiHItmQspF7cY2g0dX3j2rl5HPMhou9FFcuKB5Q16qvv-g6dkw-zka2WZW8CIBNSm5phCg45x1YLHTJ13tJC_wBF1gRFhFamggkTWu7slaa73eDZ0yEjmx5B8E1kiwGd-3p8qiJ8X_TGaGTLkmBd5PrqpDNBCZ8DqEB_xSega94Jdc8xJwHA7w=w876-h657-no?authuser=0"/>
          <div>
            <strong>Ricardo Felipe</strong>
            <span>Gaiatisse</span>
          </div>
        </header>
          <p >
            Entusiasta do humor, intensidade é tudo!
            <br/>
            <br/>
            tiro onda mesmo, respeito o seu limite, mas perco um amigo mas nao perco a piada.
          </p>
        <footer>
          <p>Preço/Hora
            <strong>R$ 100,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
      </article>
    )
}

export default TeacherItem