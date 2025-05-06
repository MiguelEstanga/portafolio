export default function SkillCart({
  skillName,
  skillDescription,
}) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-4 text-purple-300">{skillName}</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {skillDescription.map((skill , index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}
