import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setIsHidden,
}) => {
  return (
    <div className="m-2 p-2 border">
      <h3 className="text-xl font-medium">{title}</h3>
      {isVisible && <p>{description}</p>}
      {isVisible ? (
        <button
          onClick={setIsHidden}
          className="border p-2 my-2 bg-slate-400 hover:bg-slate-500 rounded"
        >
          Hide Description
        </button>
      ) : (
        <button
          onClick={setIsVisible}
          className="border p-2 my-2 bg-slate-400 hover:bg-slate-500 rounded"
        >
          Show Description
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold m-2 p-2">InstaMart</h1>
      <Section
        title="About InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
        isVisible={visibleSection == 'about'}
        setIsVisible={() => setVisibleSection('about')}
        setIsHidden={() =>
            setVisibleSection('')
        }
      />
      <Section
        title="Team of InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
        isVisible={visibleSection == 'team'}
        setIsVisible={() =>
          setVisibleSection('team')
        }
        setIsHidden={() =>
          setVisibleSection('')
        }
      />
      <Section
        title="Careers of InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
        isVisible={visibleSection == 'career'}
        setIsVisible={() =>
          setVisibleSection('career')
        }
        setIsHidden={() =>
          setVisibleSection('')
        }
      />
      <Section
        title="Products of InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
        isVisible={visibleSection == 'product'}
        setIsVisible={() =>
          setVisibleSection('product')
        }
        setIsHidden={() =>
          setVisibleSection('')
        }
      />
      <Section
        title="Details of InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit "
        isVisible={visibleSection == 'details'}
        setIsVisible={() =>
          setVisibleSection('details')
        }
        setIsHidden={() =>
          setVisibleSection('')
        }
      />
      {/* <AboutInstaMart />
            <DetailsOfInstaMart />
            <TeamInstaMart />
            <Product />
            <Careers /> */}
    </div>
  );
};

export default Instamart;
