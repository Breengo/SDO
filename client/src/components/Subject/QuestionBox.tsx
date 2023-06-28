import React from "react";

export default function QuestionBox() {
  const [choiced, setChoiced] = React.useState(10);

  return (
    <div className="w-full border-neutral-600 border mt-8 p-8 rounded-md">
      <p className="text-2xl text-neutral-300 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        illo, tempora reprehenderit sit eius sed harum nam eos modi rem iure
        asperiores, eligendi deleniti numquam perspiciatis. Minima sequi magni,
        quibusdam illum sit ad tempora officiis quaerat sunt quam ab assumenda
        itaque hic doloribus libero rerum exercitationem ratione eum fugiat
        asperiores.
      </p>
      <div className="flex flex-col justify-around items-center mt-4">
        {[1, 2, 3, 4].map((item, index) => (
          <button
            onClick={() => setChoiced(index)}
            className={`text-neutral-300 w-full mt-4 p-4 rounded-md border border-neutral-600 ${
              choiced === index
                ? "bg-neutral-600 text-neutral-100"
                : "hover:bg-neutral-600 hover:text-neutral-100 transition-all"
            }`}
            key={index}
          >{`option ${item}`}</button>
        ))}
      </div>
    </div>
  );
}
