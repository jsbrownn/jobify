import express from 'express';
const router = express.Router();
import {createJob,updateJob,deleteJob,getAllJobs,showStats} from '../controllers/jobsController.js';


router.route('/').post(createJob).get(getAllJobs )
//remember about id
router.route('/:id').delete(deleteJob).patch(updateJob);
router.route('/stats').get(showStats);

export default router;


