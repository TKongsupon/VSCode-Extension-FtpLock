import { FtpNode } from "../interfaces";
import { localGetSettingsJSON } from "../fileExplorer";
import { ftpGetSettingsJSON } from "../fileTransferProtocol";
import { FtpFileStream } from "./classFtpFileStream";

export function uploadFile (node: FtpNode) {
    localGetSettingsJSON()
    .then((json)=>ftpGetSettingsJSON(json))
    .then((settings)=>{
        var stream = new FtpFileStream(settings);
        stream.ftpUpload(node);
    });
}