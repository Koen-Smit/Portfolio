const SectionList = ({ title, textItems }) => (
    <div className="mt-6">
      <h3 className="font-medium text-gray-300">{title}</h3>
      <ul className="pl-6 space-y-2">
        {textItems.map((textItem, index) => (
          <li key={index} className="text-gray-500">
            {textItem}
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default SectionList;
  