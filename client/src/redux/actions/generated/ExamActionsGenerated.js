/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN ExamActionsGenerated.js PLEASE EDIT ../ExamActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ExamApi from "../../../api/ExamApi";

let actionsFunction = {

  //CRUD METHODS

  // Create exam
  createExam: function(exam) {
    return function(dispatch) {
      return ExamApi
        .createExam(exam)
        .then(exam => {
          dispatch(actionsFunction.createExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createExamSuccess: function(exam) {
    return { type: types.CREATE_EXAM_SUCCESS, payload: exam };
  },


  // Delete exam
  deleteExam: function(id) {
    return function(dispatch) {
      return ExamApi
        .deleteExam(id)
        .then(exam => {
          dispatch(actionsFunction.deleteExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteExamSuccess: function(exam) {
    return { type: types.DELETE_EXAM_SUCCESS, payload: exam };
  },


  // Find by _course
  findBy_course: function(key) {
    return function(dispatch) {
      return ExamApi
        .findBy_course(key)
        .then(item => {
          dispatch(actionsFunction.findBy_courseSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_courseSuccess: function(item) {
    return { type: types.FINDBY_COURSE_EXAM_SUCCESS, payload: item };
  },


  // Find by _student
  findBy_student: function(key) {
    return function(dispatch) {
      return ExamApi
        .findBy_student(key)
        .then(item => {
          dispatch(actionsFunction.findBy_studentSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_studentSuccess: function(item) {
    return { type: types.FINDBY_STUDENT_EXAM_SUCCESS, payload: item };
  },


  // Find by _teacher
  findBy_teacher: function(key) {
    return function(dispatch) {
      return ExamApi
        .findBy_teacher(key)
        .then(item => {
          dispatch(actionsFunction.findBy_teacherSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_teacherSuccess: function(item) {
    return { type: types.FINDBY_TEACHER_EXAM_SUCCESS, payload: item };
  },


  // Get exam
  loadExam: function(id) {
    return function(dispatch) {
      return ExamApi
        .getOneExam(id)
        .then(exam => {
          dispatch(actionsFunction.loadExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadExamSuccess: function(exam) {
    return { type: types.GET_EXAM_SUCCESS, payload: exam };
  },

  // Load  list
  loadExamList: function() {
    return function(dispatch) {
      return ExamApi
        .getExamList()
        .then(list => {
          dispatch(actionsFunction.loadExamListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadExamListSuccess: function(list) {
    return { type: types.LIST_EXAM_SUCCESS, payload: list };
  },

	
  // Save exam
  saveExam: function(exam) {
    return function(dispatch) {
      return ExamApi
        .saveExam(exam)
        .then(exam => {
          dispatch(actionsFunction.saveExamSuccess(exam));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveExamSuccess: function(exam) {
    return { type: types.UPDATE_EXAM_SUCCESS, payload: exam };
  },


};

export default actionsFunction;
