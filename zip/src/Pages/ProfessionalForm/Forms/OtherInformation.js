import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Radio,
  Space,
  Row,
  Col,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  message,
} from "antd";
import axios from 'axios';
import { UploadOutlined, StarOutlined } from "@ant-design/icons";
import moment from 'moment';
import _ from 'lodash';
import { authHeader } from "../../../_helpers";
// import logo from 'file:///F:/ProfessionalCriminal-WebApp/professionalcriminals-backend/build/uploads/image-1614425782242.png';
const { forwardRef, useRef, useImperativeHandle } = React;
const { Option } = Select;
export const OtherInformation = forwardRef((props, ref) => {

const baseUrl = 'http://35.154.88.86:8080/api';
//const baseUrl = 'http://localhost:8080/api';
  const [form] = Form.useForm();
  const [fileList,SetfileList] = useState([]);
  const [phamfileList,SetphamfileList] = useState([]);
  const [tapshilsfile,Settapshilsfile] = useState([]);


  const [imageList_1,SetImageList_1] = useState([]);
  const [imageList_2,SetImageList_2] = useState([]);
  const [docList_1,SetDocList_1] = useState([]);

  const [progress, setProgress] = useState(0);
 

 
  const handleUpload = ({ fileList }) =>{
   
  //  //console.log(fileList,'fileList')
  }

  const handleRemoveAccusedImage = (file) =>{
    //console.log(file)
    let temp = fileList;
    let tempIndex = _.findIndex(fileList,file)
    temp && temp.length && temp.splice(tempIndex,1);
    SetfileList([
      ...temp
    ]);
  }
  const handleRemoveAccusedPham = (file) =>{
    //console.log(file)
    let temp = phamfileList;
    let tempIndex = _.findIndex(phamfileList,file)
    temp && temp.length && temp.splice(tempIndex,1);
    SetphamfileList([
      ...temp
    ]);
  }

  const handleRemoveAccusedRecords = (file) =>{
    //console.log(file)
    let temp = tapshilsfile;
    let tempIndex = _.findIndex(tapshilsfile,file)
    temp && temp.length && temp.splice(tempIndex,1);
    Settapshilsfile([
      ...temp
    ]);
  }

  const handlePreviewAccusedRecords = (file) =>{
    //console.log(file)
  }

  // const handfileUpload = ({ fileList }) =>{
  //   SetphamfileList( fileList );
  //  }
  //  const tapshilsfileUpload = ({ fileList }) =>{
  //   Settapshilsfile( fileList );
  //  }
  const onFinish = (values) => {
    

    let accusedImage = fileList && fileList.map((item)=>{
          return item.name
    })

    let accusedPham = phamfileList && phamfileList.map((item)=>{
      return item.name
    })

    let accusedRecords = tapshilsfile && tapshilsfile.map((item)=>{
      return item.name
    })


    let obj = {
        ...values,
       accusedImage:accusedImage,
       accusedPham:accusedPham,
       accusedRecords:accusedRecords
    }
    props.otherInformationFiniesh(obj);
    // props.otherInformationFiniesh(values);
    // form.resetFields();
  };



  const uploadImage = async options => {
  
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    setProgress(0);
    const config = {
      headers: {  
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${fmData._boundary}`},
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
 
    fmData.append("profileImage",file,file.name);
    try {
      const res = await axios.post(
        baseUrl+ "/imageupload/profile-img-upload",
        fmData,
        config
      );

   
       //console.log("server res: ", res);
      // //console.log(res.data.filename)
      if(res.data && res.data.error){
        onError({ ...res.data.error });
      }else{
        //console.log(fileList,'fileList')
          SetfileList([
            ...fileList,
            {
              uid: '1',
              name:  res.data.imageName,
              status: 'done',
              url: 'https://pcimageupload.s3.ap-south-1.amazonaws.com/',
            }
          ]);
          onSuccess("Ok");
      }
   
    } catch (err) {
      // //console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };

  const phamImageUploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    setProgress(0);
    const config = {
      headers: {  
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${fmData._boundary}`},
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
 
    fmData.append("profileImage",file,file.name);
      
    try {
      const res = await axios.post(
        baseUrl + "/imageupload/profile-img-upload",
        fmData,
        config
      );

      if(res.data && res.data.error){
        onError({ ...res.data.error });
      }else{
        // SetImageList_2([
        //   ...imageList_2,res.data.imageName
        // ])
        SetphamfileList( [
          ...phamfileList,
          {
            uid: '1',
            name:  res.data.imageName,
            status: 'done',
            url: 'https://pcimageupload.s3.ap-south-1.amazonaws.com/',
          }
        ] );
          onSuccess("Ok");
      }
 
      // //console.log("server res: ", res);
  
    } catch (err) {
      //console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };
  const tapshilsfilUploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    setProgress(0);
    const config = {
      headers: {       'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${fmData._boundary}` },
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
    fmData.append("document",file,file.name);
    try {
      const res = await axios.post(
        baseUrl + "/document/documentUpload",
        fmData,
        config
      );

      if(res.data && res.data.error){
        onError({ ...res.data.error });
      }else{
        // SetDocList_1([
        //   ...docList_1,res.data.imageName
        // ])
        Settapshilsfile( [
          ...tapshilsfile,
          {
            uid: '1',
            name:  res.data.imageName,
            status: 'done',
            url: 'https://pcimageupload.s3.ap-south-1.amazonaws.com/',
          }
        ] );
          onSuccess("Ok");
      }
 
    //  //console.log("server res: ", res);
      // if(res){
      //   SetDocList_1([
      //     ...docList_1,res.data.filename
      //   ])
      // }
    } catch (err) {
      //console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };
  
  useImperativeHandle(ref, () => ({
    onFinish() {
      form.submit();
    },
  }));
  useEffect(
    (res) => {
      if (props.otherInformationData && props.otherInformationData.length && props.isEditForms) {
        // setInputField(props.basicInformationData[0]);

        form.setFieldsValue({
          ...props.otherInformationData[0],
          accusedCourtDate:props.otherInformationData[0].accusedCourtDate?moment(props.otherInformationData[0].accusedCourtDate):moment()
        });
       
 

        // IMAGE UPDATE ACCUSED IMAGE
      let accusedImageTemp = props.otherInformationData[0].accusedImage && props.otherInformationData[0].accusedImage.length?props.otherInformationData[0].accusedImage.split(','):[];
      let accusedImage = accusedImageTemp && accusedImageTemp.length && accusedImageTemp.map((item,index)=>{
            // SetImageList_1([
            //   ...imageList_1,
            //   item
            // ])
            return {
              uid: index,
              name: item,
              status: 'done',
              url: 'https://pcimageupload.s3.ap-south-1.amazonaws.com/' + item,
            }
      })

      let accusedPhamTemp = props.otherInformationData[0].accusedPham && props.otherInformationData[0].accusedPham.length?props.otherInformationData[0].accusedPham.split(','):[];
      let accusedPham = accusedPhamTemp && accusedPhamTemp.length && accusedPhamTemp.map((item,index)=>{
            // SetImageList_2([
            //   ...imageList_2,
            //   item
            // ])
            return {
              uid: index,
              name: item,
              status: 'done',
              url: 'https://pcimageupload.s3.ap-south-1.amazonaws.com/' + item,
            }
      })


      
      let accusedRecordsTemp = props.otherInformationData[0].accusedRecords && props.otherInformationData[0].accusedRecords.length?props.otherInformationData[0].accusedRecords.split(','):[];
      let accusedRecords = accusedRecordsTemp && accusedRecordsTemp.length && accusedRecordsTemp.map((item,index)=>{
            // SetImageList_2([
            //   ...imageList_2,
            //   item
            // ])
            return {
              uid: index,
              name: item,
              status: 'done',
              url: 'https://pcimageupload.s3.ap-south-1.amazonaws.com/' + item,
            }
      })

     

        SetfileList(accusedImage && accusedImage?accusedImage:[]);
        SetphamfileList(accusedPham && accusedPham?accusedPham:[]);
        Settapshilsfile(accusedRecords && accusedRecords?accusedRecords:[]);
 
      }
    },
    [props.otherInformationData[0] && props.isEditForms]
  );

  return (
    <div>
      
      <Form layout="vertical" hideRequiredMark onFinish={onFinish} form={form}>
        <Row gutter={16}>
          <Col span={8}>
         
            <Form.Item
              name="isMemberOfGang"
              label="?????????????????? ??????????????? ????????? ???????"
              rules={[{ message: "Please select value" }]}
            >
              <Select placeholder="Please select value">
                <Option value="?????????">?????????</Option>
                <Option value="????????????">????????????</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="accusedBusiness"
              label="????????????????????? ?????????????????????/???????????????????????? ????????????"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="accusedFamilyMember"
              label="????????????????????? ?????????????????????????????? ???????????????"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="accusedAssets"
              label="????????????????????? ?????????????????????????????? ???????????????"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="accusedResidence"
              label="????????????????????? ????????????????????????????????? ??????????????? Lat & Long"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="accusedJurisdiction"
              label="????????????????????? ?????????????????? ???????????????????????? ????????????????????????????????????"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="accusedCourtCaseNo"
              label="???????????? ????????????????????????????????? ??????????????? ????????? ????????????"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
              name="accusedCourtDate"
              label="??????????????????????????? ??????????????????????????? ???????????????"
              
            >
              <DatePicker />
            </Form.Item>
             
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="accusedjailStatus"
              label="??????????????? ??????????????? ???????????????????????? /???????????????"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="accusedVehicalDetails"
              label="??????????????????????????? ?????????????????? ??????????????? ??? ????????????????????? Rto ????????????"
              rules={[{ message: "Please enter value" }]}
            >
              <Input placeholder="Please enter value" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item
              name="accusedLawyerDetails"
              label="??????????????????????????? ???????????????????????? ????????? ??????????????? ??? ?????????????????? ????????????"
              rules={[
                {
                  message: "please enter address",
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="please enter address" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="accusedIdentifyingOfficer"
              label="????????????????????? ????????????????????? ??????????????? ????????????????????? /?????????????????????(????????????,?????????????????? ?????????????????? ??? ?????????????????? ??????"
              rules={[
                {
                  message: "please enter values",
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="please enter values" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="accusedSupportingleaders"
              label="?????????????????? ?????????????????? ???????????? / ??????????????????"
              rules={[
                {
                  message: "please enter values",
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="please enter values" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={24}>
       
        <Col span={6} style={{ marginBottom: "30px" }}>
        <Upload       
          accept="image/*"
          customRequest={uploadImage}
          fileList={fileList}
          onChange={handleUpload}
          onRemove = {handleRemoveAccusedImage}
          maxCount={5}
          >
            <Button icon={<UploadOutlined />}>
              ????????????????????? 5 ????????????  
            </Button>
          </Upload>
          </Col>
          <Col span={6} style={{ marginBottom: "30px" }}>
          <Upload       
          accept="image/*"
          customRequest={phamImageUploadImage}
          onRemove = {handleRemoveAccusedPham}
          fileList={phamfileList}
          maxCount={2}
          >
            <Button icon={<UploadOutlined />}>
            2 ???????????????????????? ?????????
            </Button>
          </Upload>
        </Col>
         <Col span={12} style={{ marginBottom: "30px" }}>
          <Upload
          customRequest={tapshilsfilUploadImage}
          fileList={tapshilsfile}
          onRemove = {handleRemoveAccusedRecords}
          onPreview = {handlePreviewAccusedRecords}
          maxCount={2} >
            <Button icon={<UploadOutlined />}>??????????????????????????? ??????????????? ???????????????</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
});
