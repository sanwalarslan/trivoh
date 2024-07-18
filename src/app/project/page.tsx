import ProjectCard from "@/Components/ProjectCard";
import man from "../../../public/assest/icon/man.svg";
import Navbar from "@/Components/Navbar";

const projects = [
  {
    title: "Sales",
    category: "Grow revenue in America",
    progress: 10,
    startDate: "12/12/2022",
    endDate: "12/12/2028",
    teamMemberPic: man,
    progressColor: "blue",
    categoryColor: "red",
  },
  {
    title: "Marketing",
    category: "Expand our market reach",
    progress: 50,
    startDate: "01/01/2023",
    endDate: "01/01/2027",
    teamMemberPic: man,
    progressColor: "green",
    categoryColor: "purple",
  },
  {
    title: "Development",
    category: "Build new features",
    progress: 75,
    startDate: "03/03/2023",
    endDate: "03/03/2025",
    teamMemberPic: man,
    progressColor: "orange",
    categoryColor: "blue",
  },
  {
    title: "Development",
    category: "Build new features",
    progress: 75,
    startDate: "03/03/2023",
    endDate: "03/03/2025",
    teamMemberPic: man,
    progressColor: "orange",
    categoryColor: "blue",
  },
  {
    title: "Development",
    category: "Build new features",
    progress: 75,
    startDate: "03/03/2023",
    endDate: "03/03/2025",
    teamMemberPic: man,
    progressColor: "orange",
    categoryColor: "blue",
  },
  {
    title: "Development",
    category: "Build new features",
    progress: 75,
    startDate: "03/03/2023",
    endDate: "03/03/2025",
    teamMemberPic: man,
    progressColor: "orange",
    categoryColor: "blue",
  },
  // Add more project objects here
];

const Project = () => {
  return (
    <div>
      <Navbar name={"Projects"} />
      <div className="bg-[#FAFBFC]">
        <div className="w-[95%] m-auto">
          <div className="flex justify-end pt-4">
            <button className="bg-[#0F886B] px-3 py-2 rounded-md font-medium text-base text-white">Create a Project</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                progress={project.progress}
                startDate={project.startDate}
                endDate={project.endDate}
                teamMemberPic={project.teamMemberPic}
                progressColor={project.progressColor}
                categoryColor={project.categoryColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
