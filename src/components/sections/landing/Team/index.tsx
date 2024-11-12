import { HighlightSection } from "@/components/ui/HighlightSection";
import { Linkedin } from "lucide-react";
import styles from "./Team.module.css";

const teamMembers = [
  {
    id: 1,
    name: "Mabel",
    position: "Presidente",
    image: "/images/team/mabel.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis enim id orci sollicitudin, vel feugiat tortor vehicula. Integer sed nisl sit amet nisl interdum maximus et vitae urna, sit amet varius purus ligula ac nisi.",
    linkedinUrl: "#",
  },
  {
    id: 2,
    name: "Mabel",
    position: "Presidente",
    image: "/images/team/mabel.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis enim id orci sollicitudin, vel feugiat tortor vehicula. Integer sed nisl sit amet nisl interdum maximus et vitae urna, sit amet varius purus ligula ac nisi.",
    linkedinUrl: "#",
  },
  {
    id: 3,
    name: "Mabel",
    position: "Presidente",
    image: "/images/team/mabel.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis enim id orci sollicitudin, vel feugiat tortor vehicula. Integer sed nisl sit amet nisl interdum maximus et vitae urna, sit amet varius purus ligula ac nisi.",
    linkedinUrl: "#",
  },
];

const Team = () => {
  return (
    <section className={styles.team}>
      <HighlightSection span='EQUIPO' />
      <h2 className={styles.title}>
        ¡Conoce a nuestro <span className={styles.highlight}>Team!</span>
      </h2>

      <div className={styles.membersGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.memberCard}>
            <div className={styles.imageWrapper}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.memberImage}
              />
            </div>

            <h3 className={styles.memberName}>{member.name}</h3>
            <h4 className={styles.memberPosition}>{member.position}</h4>

            <p className={styles.memberDescription}>{member.description}</p>

            <a
              href={member.linkedinUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.linkedinLink}
            >
              <Linkedin size={24} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
