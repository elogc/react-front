import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  RaisedButton,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const CardItemShort = props => (
  <div className="card-item">
    <Card>
      <CardHeader
        title={props.shop.name}
        subtitle={props.shop.email}
        avatar="/assets/img/avatar.png"
      />
      <CardMedia
        overlay={
          <CardTitle title={props.shop.company } subtitle={props.shop.address } />
        }
      >
        <img src={"/assets/img/examples/" + props.shop.index + ".jpg"} alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
        pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
        interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        {/* <RaisedButton primary={true} label="Detail" /> */}
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
);

export default CardItemShort;
