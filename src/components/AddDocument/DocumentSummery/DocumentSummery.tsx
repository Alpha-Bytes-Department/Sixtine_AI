import { useStatus } from "../../../providers/StatusProvider";

const DocumentSummery = () => {
  const { isEnglish } = useStatus();
  return (
    <div className="w-full h-full p-4">
      <div className="flex flex-col gap-5 text-[#4A4A4A]">
        {/* Document Information Section */}
        <div className="flex flex-col gap-5">
          <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-4">
            <h3 className="text-lg font-semibold">
              {isEnglish
                ? "Document Information"
                : "Informations sur le document"}
            </h3>
            <ul className="space-y-1 mt-3">
              <li>
                <strong>{isEnglish ? "Type:" : "Type :"}</strong>{" "}
                 Other 
              </li>
              <li>
                <strong>{isEnglish ? "Category:" : "Catégorie :"}</strong>{" "}
                Other
              </li>
              <li>
                <strong>
                  {isEnglish ? "Creation Date:" : "Date de création :"}
                </strong>{" "}
                01/10/2025
              </li>
              <li>
                <strong>
                  {isEnglish ? "Number of Pages:" : "Nombre de pages :"}
                </strong>{" "}
                4
              </li>
              <li>
                <strong>
                  {isEnglish ? "File Type:" : "Type de fichier :"}
                </strong>{" "}
                PDF
              </li>
            </ul>
          </div>

          {/* Patient Information Section */}
          <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-4">
            <h3 className="text-lg font-semibold">
              {isEnglish
                ? "Patient Information"
                : "Informations sur le patient"}
            </h3>
            <ul className="space-y-1 mt-3">
              <li>
                <strong>{isEnglish ? "Name:" : "Nom :"}</strong> Sohanur Rahman
                Sohan
              </li>
              <li>
                <strong>
                  {isEnglish ? "Date of Birth:" : "Date de naissance :"}
                </strong>{" "}
                22/01/2005
              </li>
              <li>
                <strong>{isEnglish ? "Address:" : "Adresse :"}</strong> 221B Elm
                St, New York
              </li>
            </ul>
          </div>
        </div>

        {/* Extracted Values Section */}
        <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-4">
          <h3 className="text-lg font-semibold">
            {isEnglish ? "Extracted Values" : "Valeurs extraites"}
          </h3>
          <div className="space-y-2">
            <div className="flex gap-20 h-20 overflow-y-auto">
              <span>
                <strong>{isEnglish ? "Name:" : "Nom :"}</strong>
              </span>
              <span>{isEnglish ? "Value" : "Valeur"}</span>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-4 mb-5">
          <h3 className="text-lg font-semibold">
            {isEnglish ? "Summary" : "Résumé"}
          </h3>
          <p className="text-sm text-gray-600 h-44 overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, illo
            illum. A excepturi non impedit consectetur expedita dolorem,
            molestiae, quasi accusamus reiciendis sequi cupiditate praesentium
            ducimus doloribus distinctio nostrum autem? Magni molestias tempore
            similique aspernatur recusandae nisi iste sapiente? Dolorem iusto at
            officiis temporibus nisi distinctio tenetur vero quisquam. Ad
            molestiae ipsum tenetur mollitia non sit natus autem facilis tempora
            quaerat, iure nostrum officiis quidem praesentium fuga nemo vitae
            nesciunt magni esse voluptate. Tempora obcaecati, id distinctio
            reprehenderit deleniti facere! Non doloremque impedit, iusto amet
            eveniet provident consequatur assumenda hic beatae illum cumque,
            praesentium itaque explicabo iste quis inventore ullam pariatur ab
            optio enim deserunt sunt labore nisi. Vel, perferendis voluptate
            praesentium, nobis aliquam nisi, reprehenderit dolorem tempore quos
            similique id repellendus quisquam asperiores quam! Labore, quaerat
            sequi! Possimus veniam nisi tempore! Enim, velit. Cumque, et quia
            repellendus laudantium quis aperiam totam exercitationem. Voluptas
            modi fuga nisi asperiores, voluptatibus nam autem harum et itaque
            explicabo earum amet architecto, non est rem ex similique obcaecati
            expedita consectetur officia libero ducimus corrupti necessitatibus?
            Consectetur non eius facere, iusto magnam quidem ratione numquam ex
            animi deleniti inventore vero nulla dolores quia explicabo cum
            sapiente nesciunt veniam doloremque odit. Nemo quo labore tenetur
            natus nam animi? Possimus vel laudantium id eius eligendi ex eos
            explicabo tenetur placeat officiis repellat, praesentium laboriosam
            aut aliquid, ipsum ut reiciendis. Maxime quisquam nobis voluptatum
            accusantium libero iure blanditiis esse, expedita, doloribus,
            facilis dolorum nemo. Consectetur, nemo repellat! Impedit optio
            vitae magni illum delectus magnam est ea asperiores necessitatibus
            tenetur expedita quas doloremque qui autem eveniet officia
            voluptatibus, debitis sed tempore, vel iure excepturi fuga, placeat
            omnis. Cum beatae numquam animi distinctio sapiente nihil, eveniet,
            tenetur quaerat nobis omnis fugit, recusandae quidem voluptates
            cumque expedita ab quos accusantium facilis nulla quae blanditiis.
            Totam, odit dolores dignissimos, temporibus nulla maiores quo rem,
            quidem aperiam laboriosam labore. Quod illum perferendis hic odit
            tenetur obcaecati, esse eligendi magni ratione! Sunt facilis cumque,
            hic unde rerum quae non explicabo iste suscipit quisquam facere
            iusto, voluptatem possimus, obcaecati ut dolore blanditiis quaerat
            ullam atque distinctio ad commodi eaque velit ea! Esse est dolore
            consequatur? Dignissimos laborum incidunt culpa debitis mollitia
            dolores blanditiis labore facere, hic laudantium voluptatem
            praesentium id sequi assumenda pariatur repudiandae quas consectetur
            sapiente magni, tempora fugit placeat laboriosam. Maxime sequi
            quaerat perferendis alias temporibus id atque, ab nobis expedita qui
            sed repellat eaque repellendus quo enim reprehenderit quidem
            corporis. Ducimus repudiandae hic, minus a id ratione esse deleniti
            voluptas porro similique beatae possimus? Repellat, mollitia,
            corporis nihil recusandae ipsam magnam laboriosam excepturi deleniti
            quibusdam illo ullam eos amet suscipit maxime asperiores
            consequuntur nisi sed quae, provident necessitatibus ipsa animi
            porro assumenda voluptates? Iusto nisi illo eius quidem quaerat,
            nulla aliquam nostrum vel voluptas accusamus, reiciendis saepe est
            ipsa ut molestiae aspernatur nemo. Vel nobis eius explicabo eligendi
            qui aliquam vitae deserunt aspernatur in saepe corrupti ad delectus
            iure magnam dolorum quia ipsa quam expedita, vero repudiandae animi
            temporibus. Consequuntur voluptate facilis, molestias quod veritatis
            distinctio necessitatibus fugit tempora laborum, nisi earum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentSummery;
