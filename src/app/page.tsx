import Image from "next/image";
import banner from "../assets/dragonball.jpg"
export default function Home() {
  return (
   <>
    <div className="bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] p-[2rem] min-h-[100vh] flex flex-col items-center">
    <Image src={banner} alt="banner" className="w-[500px] rounded-[10px] shadow-[0_0_15px_5px_#ff9800] mb-[2rem]" />
   <div className="bg-black p-10 shadow-[0_0_15px_5px_#ff9800] rounded-[20px] text-[1.2rem] max-w-[800px] text-center leading-[1.8] mb-[1.2rem] text-white">
    <p>Dragon Ball é uma das franquias de anime e mangá mais famosas do mundo, criada por 
      Akira Toriyama em 1984. A história acompanha Goku, um jovem de coração puro com habilidades extraordinárias, 
      em sua busca pelas lendárias Esferas do Dragão, que podem realizar qualquer desejo. Ao longo de sua jornada, 
      Goku enfrenta inimigos poderosos, faz amizades marcantes e descobre suas origens como um Saiyajin, uma raça guerreira.
      Misturando artes marciais, aventura e batalhas épicas, Dragon Ball conquistou gerações, 
      sendo um dos pilares da cultura pop japonesa e inspirando inúmeros outros animes e jogos.</p>
   </div>
   </div>
   </>
      
  )
}
