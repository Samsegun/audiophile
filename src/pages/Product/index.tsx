import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductSection = styled.section`
    h1 {
        font-size: 3rem;
    }
`;

const Product = () => {
    const { id } = useParams();

    return (
        <ProductSection>
            <h1>{id}</h1>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                assumenda non facilis debitis reiciendis cupiditate temporibus
                nulla animi quasi, eveniet, modi, ipsa blanditiis ratione maxime
                libero voluptates sapiente neque nisi? Porro exercitationem,
                odio, earum veritatis laboriosam voluptatem quibusdam ratione
                aspernatur in, aut laudantium optio ipsam vel. Commodi ratione
                ipsa maxime, tempore quasi sed nesciunt fugit soluta aperiam
                nobis recusandae consectetur! Accusantium quia provident illum,
                quaerat omnis excepturi totam dignissimos nostrum! Perferendis
                eius vero, architecto molestiae nostrum nam tempore! Culpa ipsum
                quo ex, illo explicabo vel omnis iste, natus minus voluptates
                ipsam praesentium sed sunt facere reiciendis, beatae itaque eius
                aliquam error corporis ipsa sapiente architecto. Nam, adipisci
                veniam nulla quasi sunt, libero dolorem tenetur dignissimos in
                distinctio illo autem. Quas deserunt omnis consequuntur dolor
                nulla repudiandae suscipit voluptates earum ducimus libero!
                Doloremque nisi perferendis praesentium nihil vero possimus
                excepturi eius deleniti quod modi, ratione est laboriosam quasi
                sed impedit debitis fugit dicta assumenda! Ex, magnam harum
                dolorum veniam ipsam fuga debitis quidem in ipsum, architecto
                est maxime quaerat, aut nam aliquid suscipit necessitatibus
                similique voluptatem porro itaque doloremque mollitia.
                Assumenda, natus? Enim, nihil quisquam? Error deleniti illum,
                dignissimos totam libero, veniam, illo voluptate nemo explicabo
                et incidunt consectetur doloribus quasi repellendus porro animi
                consequatur nisi ea. Molestias earum hic, possimus laudantium,
                iste modi laborum cum maxime odio, nulla tenetur tempora quas
                quod officia a sapiente vero repellendus odit. Quaerat quia,
                voluptatum harum ducimus natus ullam molestias voluptatem
                impedit tenetur ea officiis possimus amet saepe eum eveniet
                deleniti aliquid provident mollitia necessitatibus perspiciatis
                facere. Quae reprehenderit veniam delectus tenetur consequuntur
                expedita dolorum sed, quas omnis a velit quam minus, quaerat
                unde suscipit rerum incidunt labore nostrum molestiae facere
                eius reiciendis odio provident itaque. Aliquam cupiditate est
                quibusdam pariatur et impedit quod ad nesciunt, in voluptate
                expedita consequuntur, nisi autem perferendis provident.
            </p>
        </ProductSection>
    );
};

export default Product;
