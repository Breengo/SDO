import Layout from "../components/Layout";
import QuestionBox from "../components/Subject/QuestionBox";

export default function SubjectTask() {
  return (
    <Layout>
      <div>
        <h2 className="text-5xl font-bold text-neutral-200">Title</h2>
        <p className="mt-8 mb-8 text-2xl text-neutral-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          asperiores magni quae, quia suscipit modi sequi velit voluptates quos,
          architecto quis, maxime ut quod voluptate dignissimos pariatur
          incidunt veniam dolorum impedit? Nostrum similique est, eos atque
          molestias necessitatibus quas quia harum quaerat animi doloremque,
          porro architecto reprehenderit voluptatum nihil. Laborum voluptatibus
          omnis ipsam totam molestias perspiciatis voluptatum impedit dolores,
          soluta provident quis hic quod quaerat! Nam iusto a, sed laudantium
          corporis qui beatae voluptate magni. Cum eligendi numquam autem ex,
          ipsa ullam iure dolore natus explicabo aut asperiores. Fugiat itaque
          dolores dolorum nobis ea! Nesciunt porro ea tenetur itaque aliquid
          eligendi odio illum dolorem quasi ullam repellendus cupiditate beatae,
          nobis asperiores perferendis iure vitae vero suscipit amet et incidunt
          non.
        </p>
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <button className="w-full mt-8 rounded-md border border-neutral-600 p-4 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-600 transition-all">
          End test
        </button>
      </div>
    </Layout>
  );
}
