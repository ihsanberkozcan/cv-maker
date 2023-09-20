import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  BlobProvider,
  PDFDownloadLink,
  Font,
  Svg,
  Path,
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
    fontFamily: "Open Sans",
    paddingVertical: "30",
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
    marginTop:"-30px"
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
  sectionHeader: {
    flexDirection: "row",
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
            </View>
          ) : null}
        </View>
        <View style={styles.content}>
          {skills.length ? (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Svg style={{ width: 30, height: 30 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: "blue" }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                  />
                </Svg>
                <Text style={styles.subtitle}>{t("Skills")}</Text>
              </View>
              <View style={styles.line} />
              <Text style={styles.text}>{skills}</Text>
            </View>
          ) : null}

          {experience.length ? (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Svg style={{ width: 30, height: 30 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: "blue" }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </Svg>

                <Text style={styles.subtitle}>{t("Experience")}</Text>
              </View>
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
              <View style={styles.sectionHeader}>
                <Svg style={{ width: 30, height: 30 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: "blue" }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </Svg>

                <Text style={styles.subtitle}>{t("Education")}</Text>
              </View>

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
              <View style={styles.sectionHeader}>
                <Svg style={{ width: 30, height: 30 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: "blue" }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </Svg>

                <Text style={styles.subtitle}>{t("Projects")}</Text>
              </View>
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
              <View style={styles.sectionHeader}>
                <Svg style={{ width: 30, height: 30 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: "blue" }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </Svg>

                <Text style={styles.subtitle}>{t("Certifications")}</Text>
              </View>
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
              <View style={styles.sectionHeader}>
                <Svg style={{ width: 30, height: 30 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: "blue" }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </Svg>
                <Text style={styles.subtitle}>{t("Awards")}</Text>
              </View>
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
      <input type="text" onChange={handleFileName} />
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
