import React, {useRef} from 'react';
import './App.css';
import ScrollableBox, {ScrollableRef} from "./components/ScrollableBox";

function App() {
    const boxRef = useRef<ScrollableRef>(null)

    return (
        <div className="App">
            <ScrollableBox ref={boxRef} width={500} height={500}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet animi aperiam at
                    consequuntur doloribus ducimus ea enim eos est, exercitationem in ipsa labore magnam maiores
                    molestiae, molestias nam natus neque nesciunt, non numquam officiis perferendis praesentium qui
                    quibusdam quidem quod reiciendis repellendus repudiandae rerum saepe tempore temporibus vero
                    voluptas voluptatum. Aliquam atque autem dignissimos eaque eum, facere illo illum nulla officiis
                    placeat quas quia quibusdam, quo, quos rerum unde voluptas. Beatae ducimus eius excepturi fugiat
                    laudantium libero magni quia, repellat veritatis voluptate? Amet atque culpa, dolore ea eius ex fuga
                    laudantium molestias nisi non, placeat quas qui quidem quis, quod ratione repudiandae saepe sint
                    temporibus tenetur! Aliquid amet asperiores blanditiis consequuntur culpa, delectus earum est et eum
                    ex fuga hic impedit iusto nam neque nisi nostrum numquam possimus quam quia quisquam recusandae vel,
                    voluptatum. Aut autem dignissimos doloremque eum hic ipsum laborum minima necessitatibus omnis
                    sapiente. Aliquid architecto autem cumque dolores esse exercitationem, harum, nisi odio placeat rem
                    repellendus vero? Deleniti eius eveniet ipsum nulla numquam perspiciatis quam, quibusdam? Ad
                    deserunt dolores eos illo, maxime natus repellendus sequi. Ad commodi consequatur distinctio
                    dolores, facere labore magni minima natus nemo non quia quis rerum soluta vel voluptate.
                    Consequuntur culpa dolore dolorem ipsa itaque nihil nostrum odio quam quo, repudiandae, sed tempore
                    unde? Incidunt ipsa labore optio reiciendis. A aliquid consectetur culpa dignissimos dolor,
                    doloribus ea, eaque enim explicabo hic illum in incidunt, ipsam molestias nam nesciunt nihil
                    praesentium repellendus reprehenderit temporibus vero voluptas voluptatem. Animi aspernatur
                    consequatur doloremque facere, fugit itaque libero minima officia ratione ut! Adipisci, aliquam
                    assumenda blanditiis consectetur consequatur cumque doloremque eos eum facere illum impedit ipsa,
                    ipsum iure labore modi mollitia numquam odio odit placeat quo reiciendis saepe veniam vero vitae
                    voluptas. Eos est necessitatibus neque quaerat recusandae. Asperiores atque doloremque, fugiat illo
                    inventore nemo nisi, non perferendis quisquam quo, rem rerum temporibus unde veritatis voluptatibus!
                    Accusantium aliquam animi asperiores blanditiis corporis, cum dignissimos dolorem eum, eveniet
                    facere iste maxime nemo officiis placeat qui quod soluta tempore ullam vel voluptas. Accusamus atque
                    blanditiis expedita modi, nisi officia quos saepe. Cumque libero magnam minima necessitatibus quod
                    totam! Architecto cum doloribus ducimus expedita facilis, fugiat incidunt ipsum iste iure labore
                    mollitia odio officia porro, praesentium quia repellat sed voluptas voluptates? Et, provident
                    tempore? Ab amet architecto assumenda delectus distinctio dolorum earum facere inventore laboriosam,
                    magnam perspiciatis provident quia ratione saepe vel? Assumenda cum iste quod rem voluptatem!
                    Assumenda dolore laborum modi nam placeat, provident? Ab ad aspernatur at corporis expedita facilis
                    harum illo ipsam laboriosam nostrum odio, perspiciatis placeat possimus quis repellendus,
                    repudiandae tempora vero voluptatibus. At doloremque eius eveniet excepturi illum iste officiis
                    praesentium provident rerum saepe! Alias cumque id optio sunt ullam. Molestiae, odit reiciendis.
                    Consectetur doloremque eius obcaecati quae recusandae! Deleniti enim excepturi in pariatur possimus
                    quas quasi rem tempora ullam veniam! A ad architecto asperiores culpa cum eius eligendi, ex iure
                    iusto laboriosam maxime, necessitatibus optio perferendis praesentium saepe sequi, tempore
                    temporibus tenetur vitae voluptatibus! A delectus enim id maxime molestiae, nisi non?</p>
            </ScrollableBox>
            <button onClick={boxRef.current?.scrollToBotton}>
                descer
            </button>
        </div>
    );
}

export default App;
