import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="pb-5 justify-content-center">
          <Col md className="ms-5">
            <Row>
              <Col md className="ms-5 mt-5">
                <h1 className="title-footer">SẢN PHẨM TRỰC TUYẾN</h1>
                <div className="item-footer">
                  <div className="detail-footer">
                    Hệ thống thông tin quản lý giáo dục
                  </div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">
                    Ứng dụng liên lạc trực tuyến eNetViet
                  </div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">
                    Cổng thông tin điện tử V-Portal
                  </div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Thư viện điện tử V-Lib</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">
                    Hệ thống Học và Thi trực tuyến V-Study
                  </div>
                </div>
              </Col>
              <Col md className="mt-5">
                <h1 className="title-footer">TRUY CẬP NHANH</h1>
                <div className="item-footer">
                  <div className="detail-footer">Hỗ trợ PM hệ thống</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">
                    Hỗ trợ PM Sổ liên lạc điện tử
                  </div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Hỗ trợ PM Thư viện</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Truyền thông về chúng tôi</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">
                    Download phần mềm tiện ích
                  </div>
                </div>
              </Col>
              <Col md className="mt-5">
                <h1 className="title-footer">Danh mục</h1>
                <div className="item-footer">
                  <div className="detail-footer">Giới thiệu</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Sản phẩm dịch vụ</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Tin tức</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Câu chuyện thành công</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Tuyển dụng</div>
                </div>
                <div className="item-footer mt-2">
                  <div className="detail-footer">Liên hệ</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md>
            <div className="text-center mt-5">
              <p className="mt-4">
                Công ty TNHH Công nghệ và Giáo dục Việt Nam
              </p>
              <p>
                Địa chỉ: Tầng 9, Tòa nhà Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội
              </p>
              <p>Hotline: 1900 54 54 87</p>
              <p>Email: info@vnedu.vn</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
