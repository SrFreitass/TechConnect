import { News, NewsContainer } from "./style"
import { Aside } from "../Aside"
import { Link } from "react-router-dom"

export function SectionNews() {
    return (
    <>  
      <NewsContainer>
        <div>
            <News>
                <img src="https://source.unsplash.com/random/" alt="" />
                <div>
                    <Link to='/home/news'><h3>A máquina de calcular</h3></Link>
                    <p>primeira máquina de calcular inventada por Blaise Pascal no século XVII, uma inovação que revolucionou a computação e estabeleceu as bases para as modernas calculadoras e computadores.</p>
                </div>
            </News>

            <News>
                <img src="https://source.unsplash.com/random/" alt="" />
                <div>  
                    <Link to='/home/news'><h3>A máquina de calcular</h3></Link>
                    <p>primeira máquina de calcular inventada por Blaise Pascal no século XVII, uma inovação que revolucionou a computação e estabeleceu as bases para as modernas calculadoras e computadores.</p>
                </div>
            </News>

            <News>
                <img src="https://source.unsplash.com/random/" alt="" />                  
                <div>
                    <Link to='/home/news'><h3>A máquina de calcular</h3></Link>
                    <p>primeira máquina de calcular inventada por Blaise Pascal no século XVII, uma inovação que revolucionou a computação e estabeleceu as bases para as modernas calculadoras e computadores.</p>
                </div>
            </News>

            <News>
                <img src="https://source.unsplash.com/random/" alt="" />
                <div>
                    <Link to='/home/news'><h3>A máquina de calcular</h3></Link>
                    <p>primeira máquina de calcular inventada por Blaise Pascal no século XVII, uma inovação que revolucionou a computação e estabeleceu as bases para as modernas calculadoras e computadores.</p>
                </div>
            </News>
        </div>
        <Aside/>
      </NewsContainer>

    </>
    )
}