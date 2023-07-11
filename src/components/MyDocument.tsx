import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";

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
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export const MyDocument = () => {
  const { name, email,phoneNumber, title, links, skills } = useSelector(
    (state: any) => state.userData
  );
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
              {links.map((mylink: any, index: number) => (
                <>
                  <Text style={styles.text}>{mylink.websiteName}: </Text>
                  <Text style={styles.text}>{mylink.link}</Text>
                  {index !== links.length-1 ? (
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
            <Text style={styles.text}>Developer, Acme Inc.</Text>
            <Text style={styles.text}>2023 - Present</Text>
            <Text style={styles.text}>
              - 
            </Text>
          
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Education</Text>
            <Text style={styles.text}>
              Bachelor of Science 
            </Text>
            <Text style={styles.text}>2023</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
