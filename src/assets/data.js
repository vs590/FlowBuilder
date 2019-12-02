export const systems = [
  { sytemName: "System A", systemid: 1 },
  { sytemName: "System B", systemid: 2 },
  { sytemName: "System C", systemid: 3 }
];
export const modules = [
  {
    moduleID: 1,
    systemid: 1,
    modulename: "Module 1"
  },
  {
    moduleID: 2,
    systemid: 2,
    modulename: "Module 2"
  },
  {
    moduleID: 3,
    systemid: 3,
    modulename: "Module 3"
  },
  {
    moduleID: 4,
    systemid: 1,
    modulename: "Module 4"
  },
  {
    moduleID: 5,
    systemid: 2,
    modulename: "Module 5"
  },
  {
    moduleID: 6,
    systemid: 3,
    modulename: "Module 6"
  }
];
export const reports = [
  {
    reportID: 1,
    systemid: 1,
    reportname: "Report 1"
  },
  {
    reportID: 2,
    systemid: 2,
    reportname: "Report 2"
  },
  {
    reportID: 3,
    systemid: 3,
    reportname: "Report 3"
  },
  {
    reportID: 4,
    systemid: 1,
    reportname: "Report 4"
  },
  {
    reportID: 5,
    systemid: 2,
    reportname: "Report 5"
  },
  {
    reportID: 6,
    systemid: 3,
    reportname: "Report 6"
  }
];
export const credentials = [
  {
    id: 1,
    username: "test1",
    email: "test1@vhg.com",
    company: "jhjhjh",
    system: "System A"
  },
  {
    id: 2,
    username: "test2",
    email: "test2@vhg.com",
    company: "jhjhjh",
    system: "System B"
  }
];
export const detailData = [
  {
    automationID: 1,
    automationType: 0,
    dateCreated: "27/11/2019",
    Source: {
      system: "System B",
      module: "Module 5",
      report: "",
      project: "project A",
      company: "Briq",
      url: "www.br.iq",
      credential: "test2"
    },
    Target: {
      system: "System A",
      module: "Module 1",
      report: "",
      project: "project B",
      company: "Briq",
      url: "www.br.iq",
      credential: "test1"
    },
    Briq: {}
  },
  {
    automationID: 2,
    automationType: 1,
    dateCreated: "26/11/2019",
    Source: {
      system: "System C",
      module: "",
      report: "Report 3",
      project: "project C",
      company: "Briq",
      url: "www.br.iq",
      credential: "test1"
    },
    Target: {},
    Briq: {
      system: "System A",
      report: "Report 1",
      project: "project B",
      company: "Briq",
      url: "www.br.iq",
      credential: "test2"
    }
  }
];
