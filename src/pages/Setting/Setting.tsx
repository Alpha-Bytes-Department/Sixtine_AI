import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router";

const Settings = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" flex-1">
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-col gap-5 w-full max-w-4xl rounded-lg text-[#4A4A4A] shadow-[0_0_4px_0_#00000040] p-10 relative">
          <button onClick={handleGoBack}>
            <RxCross2 className="absolute top-5 right-5 text-xl text-[#4e7ba0] cursor-pointer" />
          </button>
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          {/* Scrollable Box */}
          <div className=" p-3 h-60 overflow-y-auto  bg-[#f1f1f1] mb-4">
            <h3 className="font-semibold text-2xl mb-2 ">General Context</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, debitis illo? Repudiandae quisquam, eveniet ipsam
              officia expedita quae iure voluptatem incidunt nulla! Suscipit
              perferendis, pariatur quasi earum, exercitationem, doloribus
              doloremque ipsa sit fugit id eos dolorum corporis optio unde.
              Commodi cupiditate officia eligendi dolore exercitationem quia,
              eveniet, non eius libero provident sequi sit placeat saepe nam
              corporis adipisci quibusdam? Aspernatur, cum voluptatem delectus
              nihil at non aliquid soluta facilis itaque possimus alias iusto
              cumque atque fugiat expedita iure, sunt impedit rerum voluptatibus
              repellendus hic, quod quis incidunt sequi. Asperiores incidunt
              explicabo praesentium consequuntur fugiat, ea sequi ullam porro
              facilis laudantium velit quis! Sequi perspiciatis ducimus
              perferendis minus sit dolor quae, atque dolorum laboriosam, non
              expedita necessitatibus doloribus enim eos odit repellat maiores,
              dolores voluptatibus aut? Repellendus nostrum exercitationem
              praesentium commodi ab? Suscipit praesentium tenetur, saepe
              quibusdam quis optio explicabo natus, incidunt atque tempora
              asperiores laboriosam sed quia iure rem vel impedit soluta ut
              officia inventore sunt aliquid, placeat ad. Dolorum perferendis,
              doloremque tempora quo quibusdam odio excepturi cupiditate
              impedit. Nemo, temporibus? Ipsam perferendis sequi quis ullam
              neque quidem voluptatum officia, amet, id odit rerum deleniti. Ut
              sunt rem rerum, harum pariatur eligendi dolor nesciunt, quam iure
              in commodi velit, aperiam blanditiis maxime deleniti fugit maiores
              voluptas quasi quae. Dolorum repellat nostrum eveniet magnam
              itaque doloremque atque ipsa totam iusto! Dicta, aperiam magni
              sequi adipisci nostrum at quaerat et libero eos itaque rem minus
              ea quas eligendi, accusantium ex repellendus voluptatibus ratione
              recusandae iste! Quam nihil consequuntur, totam delectus, nesciunt
              animi architecto laboriosam, hic ipsam sapiente cum laudantium
              esse deleniti quod. Ipsam aliquid ipsum, quia, illo similique,
              aspernatur nam obcaecati repellat deserunt nostrum rerum. Itaque
              nemo quia dolor provident magni veritatis. Quas neque, illo veniam
              aperiam numquam corporis sint quis esse dicta minima saepe
              repudiandae tempore similique sapiente laborum facilis? Quo
              voluptas repellat veritatis itaque consectetur maxime labore
              mollitia, sequi aliquid, consequuntur at quia reiciendis deserunt
              rem? Sequi explicabo laboriosam nisi aspernatur esse hic iure,
              perferendis iusto nemo? Facilis suscipit, quo animi autem odit eos
              fugit debitis earum consequuntur, dolore quibusdam commodi! A,
              dolorum repellendus impedit laudantium perspiciatis quidem
              possimus eos neque consectetur ipsum velit minus dolores, sequi
              quis mollitia dolorem quos rerum quas, maiores nobis vel quasi
              facere quae. Et repellendus tempore consectetur architecto soluta
              atque eaque nihil ut, sapiente officia nesciunt quo tempora est
              labore rerum nostrum, obcaecati voluptates modi. Praesentium
              adipisci autem mollitia nemo ullam eveniet, doloribus tenetur
              maiores! Numquam, repellat. Aut tempora, nam sunt, quisquam
              possimus ipsum enim ratione rerum dolorem eveniet quis nulla quia.
              Reprehenderit libero expedita velit obcaecati aliquam ullam,
              inventore quas iusto voluptas illum incidunt iste laudantium fuga
              autem minus maxime quidem reiciendis. Nobis eaque dolorum
              excepturi sapiente beatae animi sint voluptas reprehenderit
              dolores maxime ab blanditiis est tempora laborum necessitatibus,
              similique modi dignissimos a veniam temporibus harum culpa
              obcaecati mollitia. Consequuntur commodi nemo neque inventore
              ducimus minima eligendi nisi provident veritatis rem harum
              reiciendis iusto aperiam labore, fugiat non earum deserunt? Animi
              ea nulla unde eaque ipsa officia commodi voluptates consectetur,
              accusantium quis?
            </p>
          </div>

          {/* Attributes Section */}
          <div className="bg-[#f1f1f1] h-52 p-3 space-y-1">
            <p>
              <span className="font-semibold">Speed:</span> Normal
            </p>
            <p>
              <span className="font-semibold">Tone:</span> Very friendly, as
              with an excellent physician colleague
            </p>
            <p>
              <span className="font-semibold">Voice effect:</span> Clear, calm,
              direct
            </p>
            <p>
              <span className="font-semibold">Rhythm:</span> Fluid
            </p>
          </div>
          {/* Save Button */}
          <div className="">
            <button className="py-1 bg-[#4e7ba0] text-white rounded-sm px-10 mt-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
