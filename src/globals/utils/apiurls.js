import { restbaseurl } from './constants';

export const resturls = {
  login: 'framelytics/hrlytics_website/user/login',
  logout: 'framelytics/hrlytics_website/user/logout',
  createBlog: 'framelytics/hrlytics_website/user/createBlog',
  obtainJobRequirements: 'framelytics/hrlytics_website/user/obtainJobRequirements',
  obtainJobRequirement: 'framelytics/hrlytics_website/user/obtainJobRequirement',
  createJobRequirementQuery: 'framelytics/hrlytics_website/user/createJobRequirementQuery',
  obtainBlogList: 'framelytics/hrlytics_website/user/obtainBlogList',
  obtainJobRequirementQueryList: 'framelytics/hrlytics_website/user/obtainJobRequirementQueryList',
  obtainJobRequirementQuery: 'framelytics/hrlytics_website/user/obtainJobRequirementQuery',
  obtainBlog: 'framelytics/hrlytics_website/user/obtainBlog',
  contactProfileViewUpdate: 'framelytics/hrlytics_website/user/updateContactProfileForJobRequirementQuery',
  approvalUpdate: 'framelytics/hrlytics_website/user/updateApproval',
  createAndUpdateJobRequirementDetails: 'framelytics/hrlytics_website/user/createAndUpdateJobRequirementDetails',
  saveOrUpdateFileField: 'framelytics/hrlytics_website/user/saveOrUpdateFileField',
  deleteJobRequirementDetails: 'framelytics/hrlytics_website/user/deleteJobRequirementDetails',
};

export const successurl = `${restbaseurl}student/success`;
export const failureurl = `${restbaseurl}student/failure`;

export const dummyurl = 'http://dummy.restapiexample.com/api/v1/employees';
