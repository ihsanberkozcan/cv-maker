import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Font,
  BlobProvider,
} from "@react-pdf/renderer";
import { pdfjs, Document as ReactDocument, Page as ReactPage } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

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
import { useState } from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
    fontFamily: "Open Sans",
  },
  cvHeader: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cvSubPart: {
    flexDirection: "row",
  },
  section: {
    marginBottom: 5,
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
  line: {
    marginBottom: 10,
    marginTop: 10,
    height: 1,
    backgroundColor: "black",
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
          {links.length ? (
            <View style={styles.links}>
              {links.map((mylink: linksType, index: number) => (
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
            </View>
          ) : null}
        </View>
        {skills.length ? (
          <View>
            <View style={styles.line} />
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Skills")}</Text>
              <Text style={styles.text}>{skills}</Text>
            </View>
          </View>
        ) : null}

        {experience.length ? (
          <View>
            <View style={styles.line} />
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Experience")}</Text>
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
          </View>
        ) : null}

        {education.length ? (
          <View>
            <View style={styles.line} />
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Education")}</Text>
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
          </View>
        ) : null}

        {project.length ? (
          <View>
            <View style={styles.line} />
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Projects")}</Text>
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
          </View>
        ) : null}

        {certification.length ? (
          <View>
            <View style={styles.line} />
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Certifications")}</Text>
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
          </View>
        ) : null}

        {award.length ? (
          <View>
            <View style={styles.line} />
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t("Awards")}</Text>
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
          </View>
        ) : null}
      </Page>
    </Document>
  );
};

export const ClassicResume = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

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
    <div className="flex flex-col items-center">
      <h2 className="text-2xl md:text-2xl lg:text-4xl">{t("File Name")}:</h2>
      <input className="textInput" type="text" onChange={handleFileName} />
      <div>
        <BlobProvider
          document={
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
          }
        >
          {({ url }) => {
            return (
              <div>
                <ReactDocument file={url} onLoadSuccess={onDocumentLoadSuccess}>
                  <ReactPage pageNumber={pageNumber} />
                </ReactDocument>
                <div className="flex items-center justify-between my-3 mx-auto ">
                  {pageNumber !== 1 ? (
                    <button
                      onClick={() => setPageNumber(pageNumber + -1)}
                      className="p-2 bg-indigo-300 text-white rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                  ) : (
                    <div className="w-[40px]"></div>
                  )}

                  <p>
                    {pageNumber} of {numPages}
                  </p>
                  {pageNumber !== numPages ? (
                    <button
                      onClick={() => setPageNumber(pageNumber + 1)}
                      className="p-2 bg-indigo-300 text-white rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  ) : (
                    <div className="w-[40px]"></div>
                  )}
                </div>
              </div>
            );
          }}
        </BlobProvider>
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
      className="bg-indigo-300 rounded text-white p-3 mt-3 mb-3 w-full text-center"
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
