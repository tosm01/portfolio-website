import logging
import azure.functions as func


def main(req: func.HttpRequest, counterDoc: func.DocumentList, updatedCounterDoc: func.Out[func.Document]) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        if counterDoc and len(counterDoc) > 0:
            counterDoc[0]["count"] = counterDoc[0].get("count", 0) + 1
            updatedCounterDoc.set(func.Document.from_json(counterDoc[0].to_json()))
            return func.HttpResponse(f"{counterDoc[0].to_json()}", status_code=200)
        else:
            return func.HttpResponse("Counter document not found" + str(counterDoc), status_code=404)
    except Exception as e:
        return func.HttpResponse(str(e), status_code=500)