var essentialFunction = '<div class="row job-function" id="job-function-%num%"> <div class="col-xs-9"> <p class="job-function-header">Job Function %num%</p> </div> <div class="col-xs-3"> <button class="btn btn-danger btn-sm pull-right section-close-btn function-close-btn" onclick="removeSection(this);"><span class="glyphicon glyphicon-trash"></span> </button> </div> <div class="col-xs-9"> <textarea class="form-control essential-job-function-text-area-1" type="text" id="essential-job-function-%num%-text-area-1" placeholder="Essential Job Function"></textarea> </div> <div class="col-xs-3"><span class="rating-label">Choose Rating:<br></span> <div class="btn-group" role="group" aria-label="Rating:"> <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button> <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button> <button type="button" class="btn btn-default rating-btn" value="SP">SP</button> <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button> <button type="button" class="btn btn-default rating-btn" value="O">O</button> </div> </div> <div class="col-xs-9"> <textarea class="form-control essential-job-function-text-area-2" type="text" id="essential-job-function-%num%-text-area-2" placeholder="Standard"></textarea> </div> <div class="col-xs-9"> <textarea class="form-control essential-job-function-text-area-3" type="text" name="essential-job-function" id="essential-job-function-%num%-text-area-3" placeholder="Comments (are not required for a rating of &quot;SP&quot;)"></textarea> </div></div>';

var numOfEssentialFunctions = 0;

function addEssentialFunction(){
	var formattedSection = essentialFunction.replace(/%num%/g, numOfEssentialFunctions+1);
	numOfEssentialFunctions++;
	$('#essential-job-functions-container').append(formattedSection);
	addButtonToolTips();
	updateDynamicallyAddedTextAreas()
}