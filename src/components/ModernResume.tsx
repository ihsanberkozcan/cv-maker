import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Font,
} from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";

import OpenSans from "../fonts/OpenSans-Regular.ttf";
import { useDispatch, useSelector } from "react-redux";
import {
  awardType,
  certificationType,
  educationType,
  experienceType,
  linksType,
  projectType,
  userDataType,
} from "../types/type";
import { updateData } from "../stores/userData";
import { formatDate } from "../utils/formatDate";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    fontFamily: "Open Sans",
  },
  cvHeader: {
    backgroundColor: "blue",
    paddingHorizontal: "30",
    paddingVertical: "20",
    color: "white",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: "40",
    paddingTop: "10",
    paddingBottom: "30",
  },
  cvSubPart: {
    flexDirection: "row",
  },
  section: {},
  subSection: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  links: {
    flexDirection: "row",
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
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
  line: {
    marginVertical: 5,
    height: 1,
    backgroundColor: "blue",
  },
  description: {
    fontSize: 12,
  },
});

export const Content = ({
  name,
  email,
  phoneNumber,
  title,
  links,
  location,
  skills,
  experience,
  education,
  project,
  certification,
  award,
}: userDataType) => {
  Font.register({
    family: "Open Sans",
    src: OpenSans,
    fontWeight: "normal",
    fontStyle: "normal",
  });
  const { t } = useTranslation();
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.cvHeader}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.jobTitle}>{title}</Text>
          <View style={styles.cvSubPart}>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>&nbsp;|&nbsp;</Text>
            <Text style={styles.text}>{phoneNumber}</Text>
            <Text style={styles.text}>&nbsp;|&nbsp;</Text>
            <Text style={styles.text}>{location}</Text>
          </View>
          {links.length?(  <View style={styles.links}>
            {links?.map((mylink: linksType, index: number) => (
              <>
                <Text style={styles.text}>{mylink.websiteName} :&nbsp;</Text>
                <Text style={styles.text}>{mylink.link}</Text>

                {index !== links.length - 1 ? (
                  <Text style={styles.text}>&nbsp;|&nbsp;</Text>
                ) : (
                  <></>
                )}
              </>
            ))}
          </View>):null}
        
        </View>
        <View style={styles.content}>
          {skills.length ? (
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Skills")}</Text>
              <View style={styles.line} />
              <Text style={styles.text}>{skills}</Text>
            </View>
          ) : null}

          {experience.length ? (
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Experience")}</Text>
              <View style={styles.line} />
              {experience?.map((myExperience: experienceType) => (
                <View style={styles.subSection}>
                  <View>
                    <Text style={styles.header}>{myExperience.employer}</Text>
                    <Text style={styles.header}>{myExperience.jobTitle}</Text>
                    <Text style={styles.text}>{myExperience.description}</Text>
                  </View>
                  <View style={styles.dateAndLocation}>
                    <Text style={styles.text}>
                      {formatDate(myExperience.startDate)} -&nbsp;
                      {formatDate(myExperience.endDate)}
                    </Text>
                    <Text style={styles.text}>{myExperience.location}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
          {education.length ? (
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Education")}</Text>
              <View style={styles.line} />
              {education.map((myEducation: educationType) => (
                <View style={styles.subSection}>
                  <View>
                    <Text style={styles.header}>
                      {myEducation.instituteName}
                    </Text>
                    <Text style={styles.header}>{myEducation.degreeType}</Text>
                    <Text style={styles.text}>{myEducation.fieldOfStudy}</Text>
                  </View>
                  <View style={styles.dateAndLocation}>
                    <Text style={styles.text}>
                      {formatDate(myEducation.startDate)} -&nbsp;
                      {formatDate(myEducation.endDate)}
                    </Text>
                    <Text style={styles.text}>{myEducation.scores}</Text>
                    <Text style={styles.text}>{myEducation.location}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
          {project.length ? (
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Projects")}</Text>
              <View style={styles.line} />
              {project.map((myProject: projectType) => (
                <View style={styles.subSection}>
                  <View>
                    <Text style={styles.header}>{myProject.projectTitle}</Text>
                    <Text style={styles.header}>{myProject.projectLink}</Text>
                    <Text style={styles.description}>
                      {myProject.projectDescription}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
          {certification.length ? (
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Certifications")}</Text>
              <View style={styles.line} />
              {certification.map((myCertification: certificationType) => (
                <View style={styles.subSection}>
                  <View>
                    <Text style={styles.header}>
                      {myCertification.certificateTitle}
                    </Text>
                    <Text style={styles.header}>
                      {myCertification.IssuedBy}
                    </Text>
                    <Text style={styles.header}>
                      {myCertification.certificateLink}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
          {award.length ? (
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Awards")}</Text>
              <View style={styles.line} />
              {award.map((myAward: awardType) => (
                <View style={styles.subSection}>
                  <View>
                    <Text style={styles.header}>{myAward.awardTitle}</Text>
                    <Text style={styles.description}>
                      {myAward.awardDescription}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </Page>
    </Document>
  );
};

export const ModernResume = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    fileName,
    name,
    email,
    phoneNumber,
    title,
    links,
    location,
    skills,
    experience,
    education,
    project,
    award,
    certification,
  } = useSelector((state: any) => state.userData);

  const handleFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ key: "fileName", value: e.target.value }));
  };
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl md:text-2xl lg:text-4xl">{t("File Name")}:</h2>
      <input type="text" onChange={handleFileName} />
      <div className="h-full">
        <PDFViewer showToolbar={false}>
          <Content
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            title={title}
            links={links}
            location={location}
            skills={skills}
            experience={experience}
            education={education}
            fileName={""}
            project={project}
            certification={certification}
            award={award}
          />
        </PDFViewer>
      </div>
      <DownloadLink
        fileName={fileName}
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        title={title}
        links={links}
        skills={skills}
        experience={experience}
        education={education}
        location={location}
        project={project}
        certification={certification}
        award={award}
      />
    </div>
  );
};

export const DownloadLink = ({
  fileName,
  name,
  email,
  phoneNumber,
  title,
  links,
  skills,
  experience,
  education,
  location,
  project,
  certification,
  award,
}: userDataType) => {
  const { t } = useTranslation();
  return (
    <PDFDownloadLink
      className="bg-indigo-300 rounded text-white mb-3 p-3 mt-3 w-full text-center"
      document={
        <Content
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          title={title}
          links={links}
          skills={skills}
          experience={experience}
          education={education}
          location={location}
          project={project}
          certification={certification}
          award={award}
        />
      }
      fileName={`${fileName}.pdf`}
    >
      {({ loading }) => (loading ? t("Loading document...") : t("Download"))}
    </PDFDownloadLink>
  );
};
