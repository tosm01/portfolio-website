import logging

import azure.functions as func


def main(req: func.HttpRequest, counterDoc: func.DocumentList, updatedCounterDoc: func.Out[func.Document]) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        counterDoc[0]["count"] = counterDoc[0]["count"] + 1
        updatedCounterDoc.set(func.Document.from_json(counterDoc[0].to_json()))
        return func.HttpResponse(f"{counterDoc[0].to_json()}", status_code=200)
    except Exception as e:
        return func.HttpResponse(e, status_code=500)
