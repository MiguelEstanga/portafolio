import SkillsCart from "../../components/skillsCart/SkillCart";
export default function Skills() {
  return (
    <div className="mxw pd  ">
      <section id="habilidades" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left texto-dart">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillsCart
            skillName="Desarrollo Web front-end"
            skillDescription={[
              "HTML5",
              "CSS3",
              "JavaScript (ES6+)",
              "wordpress",
            ]}
          />
          <SkillsCart
            skillName="Desarrollo Web back-end"
            skillDescription={[
              "PHP",
              "NODE JS",
            ]}
          />
          <SkillsCart
            skillName="Desarrollo Web front-ed frameworks/libs"
            skillDescription={[
              "REACT DOM",
              "NEXT JS (ts, js)",
             
              "BLADE",
              "LIVEWIRE",
            ]}
          />
          <SkillsCart
            skillName="Desarrollo Web back-end frameworks"
            skillDescription={[
              "LARAVEL",
              "EXPRESS",
              "NEXT JS (ts, js)",
            ]}
          />
           <SkillsCart
            skillName="Desarrollo Mobile"
            skillDescription={[
              "FLUTTER",
              "REACT NATIVE EXPO (ts, js)",
            ]}
          />
          <SkillsCart
            skillName="Bases de datos"
            skillDescription={[
              "MYSQL",
              "POSTGRES",
              "SQLITE",
              "MONGODB",
              "FIREBASE",
            ]}
          />
           <SkillsCart
            skillName="WEB HOOKS"
            skillDescription={[
              "NGROK",
              "PUSHER",
            ]}
          />
           <SkillsCart
            skillName="SISTEMA OPERATIVO"
            skillDescription={[
              "LINUX (ngix , apache , ubuntu)",
              "Windows",
            ]}
          />
           <SkillsCart
            skillName="OTRAS HERRAMIENTAS"
            skillDescription={[
              "GIT",
              "GITHUB",
              "GITLAB",
              "BITBUCKET",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
