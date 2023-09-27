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
  Link,
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
  resumeColorType,
  userDataType,
} from "../types/type";
import { updateData } from "../stores/userData";
import { formatDate } from "../utils/formatDate";
import { useState } from "react";
import ColorPicker from "./ColorPicker";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    fontFamily: "Open Sans",
    paddingVertical: "30",
  },
  cvHeader: {
    paddingHorizontal: "30",
    paddingVertical: "20",
    color: "white",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-30px",
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
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "center",
  },
  linkText: {
    flexDirection: "row",
    alignItems: "center",
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
  link: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 5,
    textDecoration: "none",
  },
  dateAndLocation: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  line: {
    marginVertical: 5,
    height: 1,
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
  headerBackground,
  headerText,
  sectionTitleText,
  textColor,
}: userDataType & resumeColorType) => {
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
        <View
          style={{
            ...styles.cvHeader,
            backgroundColor: headerBackground,
            color: headerText,
          }}
        >
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
            <View style={{ ...styles.links }}>
              {links?.map((mylink: linksType, index: number) => (
                <>
                  <View style={styles.linkText}>
                    {mylink.websiteName == "GitHub" ? (
                      <Svg style={{ width: 20, height: 20 }}>
                        <Path
                          style={{ fill: headerText }}
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        />
                      </Svg>
                    ) : mylink.websiteName == "GitLab" ? (
                      <Svg style={{ width: 20, height: 20 }}>
                        <Path
                          style={{ fill: headerText }}
                          d="m15.734 6.1-.022-.058L13.534.358a.568.568 0 0 0-.563-.356.583.583 0 0 0-.328.122.582.582 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.673.673 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.046 4.046 0 0 0 1.34-4.668Z"
                        />
                      </Svg>
                    ) : mylink.websiteName == "LinkedIn" ? (
                      <Svg style={{ width: 20, height: 20 }}>
                        <Path
                          style={{ fill: headerText }}
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        />
                      </Svg>
                    ) : mylink.websiteName == "Medium" ? (
                      <Svg style={{ width: 20, height: 20 }}>
                        <Path
                          style={{ fill: headerText }}
                          d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
                        />
                      </Svg>
                    ) : mylink.websiteName == "Website" ? (
                      <Svg style={{ width: 20, height: 20 }}>
                        <Path
                          style={{ fill: headerText }}
                          d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
                        />
                      </Svg>
                    ) : null}

                    <Link
                      src={mylink.link}
                      style={{ ...styles.link, color: headerText }}
                    >
                      {mylink.link}
                    </Link>
                  </View>
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
                <Svg style={{ width: 30, height: 25 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: sectionTitleText }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                  />
                </Svg>
                <Text style={{ ...styles.subtitle, color: sectionTitleText }}>
                  {t("Skills")}
                </Text>
              </View>
              <View
                style={{ ...styles.line, backgroundColor: sectionTitleText }}
              />
              <View style={{ ...styles.subSection, color: textColor }}>
                <Text style={styles.text}>{skills}</Text>
              </View>
            </View>
          ) : null}

          {experience.length ? (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Svg style={{ width: 30, height: 25 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: sectionTitleText }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </Svg>

                <Text style={{ ...styles.subtitle, color: sectionTitleText }}>
                  {t("Experience")}
                </Text>
              </View>
              <View
                style={{ ...styles.line, backgroundColor: sectionTitleText }}
              />
              {experience?.map((myExperience: experienceType) => (
                <View style={{ ...styles.subSection, color: textColor }}>
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
                <Svg style={{ width: 30, height: 25 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: sectionTitleText }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </Svg>

                <Text style={{ ...styles.subtitle, color: sectionTitleText }}>
                  {t("Education")}
                </Text>
              </View>

              <View
                style={{ ...styles.line, backgroundColor: sectionTitleText }}
              />
              {education.map((myEducation: educationType) => (
                <View style={{ ...styles.subSection, color: textColor }}>
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
                <Svg style={{ width: 30, height: 25 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: sectionTitleText }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </Svg>

                <Text style={{ ...styles.subtitle, color: sectionTitleText }}>
                  {t("Projects")}
                </Text>
              </View>
              <View
                style={{ ...styles.line, backgroundColor: sectionTitleText }}
              />
              {project.map((myProject: projectType) => (
                <View style={{ ...styles.subSection, color: textColor }}>
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
                <Svg style={{ width: 30, height: 25 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: sectionTitleText }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </Svg>

                <Text style={{ ...styles.subtitle, color: sectionTitleText }}>
                  {t("Certifications")}
                </Text>
              </View>
              <View
                style={{ ...styles.line, backgroundColor: sectionTitleText }}
              />
              {certification.map((myCertification: certificationType) => (
                <View style={{ ...styles.subSection, color: textColor }}>
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
                <Svg style={{ width: 30, height: 25 }} stroke-width="1.5">
                  <Path
                    style={{ stroke: sectionTitleText }}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </Svg>
                <Text style={{ ...styles.subtitle, color: sectionTitleText }}>
                  {t("Awards")}
                </Text>
              </View>
              <View
                style={{ ...styles.line, backgroundColor: sectionTitleText }}
              />
              {award.map((myAward: awardType) => (
                <View style={{ ...styles.subSection, color: textColor }}>
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

  const { headerBackground, headerText, sectionTitleText, textColor } =
    useSelector((state: any) => state.resumeColor);

  const handleFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ key: "fileName", value: e.target.value }));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <h2 className="text-2xl md:text-2xl lg:text-4xl py-4">
          {t("File Name")}:
        </h2>
        <input className="textInput" type="text" onChange={handleFileName} />
      </div>

      <div className="w-full">
        <h2 className="text-2xl md:text-2xl lg:text-4xl py-4">{t("Color")}:</h2>
      </div>

      <div className="flex w-full justify-between space-x-2 mb-2">
        <ColorPicker
          text="Header Background"
          defaultColor={headerBackground}
          mykey="headerBackground"
          ColorPickerPossition="left"
        />
        <ColorPicker
          text="Header Text"
          defaultColor={headerText}
          mykey="headerText"
          ColorPickerPossition="left"
        />
        <ColorPicker
          text="Section Title Text"
          defaultColor={sectionTitleText}
          mykey="sectionTitleText"
          ColorPickerPossition="right"
        />
        <ColorPicker
          text="Text"
          defaultColor={textColor}
          mykey="textColor"
          ColorPickerPossition="right"
        />
      </div>
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
              headerBackground={headerBackground}
              headerText={headerText}
              sectionTitleText={sectionTitleText}
              textColor={textColor}
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
        headerBackground={headerBackground}
        headerText={headerText}
        sectionTitleText={sectionTitleText}
        textColor={textColor}
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
  headerBackground,
  headerText,
  sectionTitleText,
  textColor,
}: userDataType & resumeColorType) => {
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
          headerBackground={headerBackground}
          headerText={headerText}
          sectionTitleText={sectionTitleText}
          textColor={textColor}
        />
      }
      fileName={`${fileName}.pdf`}
    >
      {({ loading }) => (loading ? t("Loading document...") : t("Download"))}
    </PDFDownloadLink>
  );
};
