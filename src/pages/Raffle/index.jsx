import Lottie from "lottie-react";
import Ticket from "../../assets/animation/Ticket.json";

const Raffle = () => {
  return (
    <div className="a7LD">
      <div className="PsHq">
        <div>
          <div className="O793" alt="market">
            <Lottie animationData={Ticket}/>
          </div>
          <h1 className="awkK q2XB">
            Летняя акция
          </h1>
          <p className="oRuf NN8a">
            Мы разыгрываем <b>TON на сумму 20 000 $!</b> Не упустите шанс выиграть один из 10 ежедневных призов! В конце второй недели разыграем 5 суперпризов!<br/><b>Сумма выигрыша ежедневно растет!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Raffle;
