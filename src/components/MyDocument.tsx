import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { educationType, experienceType, linksType } from "../stores/userData";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  subSection: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  links: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  header: {
    fontSize: 13,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  dateAndLocation: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export const MyDocument = () => {
  const {
    name,
    email,
    phoneNumber,
    title,
    links,
    skills,
    experience,
    education,
  } = useSelector((state: any) => state.userData);
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{title}</Text>
            <Text style={styles.text}>Ankara Türkiye</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>{phoneNumber}</Text>
            <View style={styles.links}>
              {links.map((mylink: linksType, index: number) => (
                <>
                  <Text style={styles.text}>{mylink.websiteName}: </Text>
                  <Text style={styles.text}>{mylink.link}</Text>
                  {index !== links.length - 1 ? (
                    <Text style={styles.text}>{" | "} | </Text>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Skills</Text>
            <Text style={styles.text}>{skills}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Experience</Text>
            {experience?.map((myExperience: experienceType) => (
              <div style={styles.subSection}>
                <View>
                  <Text style={styles.header}>{myExperience.employer}</Text>
                  <Text style={styles.header}>{myExperience.jobTitle}</Text>
                  <Text style={styles.text}>{myExperience.description}</Text>
                </View>
                <View style={styles.dateAndLocation}>
                  <Text style={styles.text}>
                    {myExperience.startDate} - {myExperience.endDate}
                  </Text>
                  <Text style={styles.text}>{myExperience.location}</Text>
                </View>
              </div>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Education</Text>
            {education.map((myEducation: educationType) => (
              <div style={styles.subSection}>
                <View>
                  <Text style={styles.header}>{myEducation.instituteName}</Text>
                  <Text style={styles.header}>{myEducation.degreeType}</Text>
                  <Text style={styles.text}>{myEducation.fieldOfStudy}</Text>
                </View>
                <View style={styles.dateAndLocation}>
                  <Text style={styles.text}>
                    {myEducation.startDate} - {myEducation.endDate}
                  </Text>
                  <Text style={styles.text}>{myEducation.scores}</Text>
                  <Text style={styles.text}>{myEducation.location}</Text>
                </View>
              </div>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
