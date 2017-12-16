import { programmeConstants } from '../constants/programmeConstants';
import { programmeService } from '../services/programmeService';

export const programmeActions = {
	getAll,
	getActivitiesByProgrammeId
};

const loadingText = '加载中...';

function getAll() {
	return dispatch => {
		dispatch(request(programmeConstants.PROGRAMME_GETALL_REQUEST, loadingText));

		programmeService.getAll().then(
			res => {
				dispatch(success(programmeConstants.PROGRAMME_GETALL_SUCCESS, res));
			},
			error => {
				dispatch(failure(programmeConstants.PROGRAMME_GETALL_FAILURE, error));
			}
		);
	};
}

function getActivitiesByProgrammeId(id) {
	return dispatch => {
		dispatch(
			request(programmeConstants.PROGRAMME_ACTIVITY_REQUEST, loadingText)
		);

		programmeService.getActivitiesByProgrammeId(id).then(
			res => {
				dispatch(success(programmeConstants.PROGRAMME_ACTIVITY_SUCCESS, res));
			},
			error => {
				dispatch(failure(programmeConstants.PROGRAMME_ACTIVITY_FAILURE, error));
			}
		);
	};
}

function request(type, msg) {
	return { type: type, msg };
}
function success(type, res) {
	return { type: type, res };
}
function failure(type, msg) {
	alert('系统异常');
	return { type: type, msg };
}
