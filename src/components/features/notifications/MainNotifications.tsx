import React from "react";
import NotificationsHeader from "./NotificationsHeader";
import NotificationTitle from "./NotificationTitle";
import DiscoverMore from "@/components/general/DiscoverMore";
import NotificationCapabilities from "./NotificationCapabilities";
import NotificationsFeatures from "./NotificationsFeatures";

const MainNotifications = () => {
  return <div>
    <NotificationsHeader />
    <NotificationCapabilities />
    <NotificationTitle />
    <NotificationsFeatures />
    <DiscoverMore />
  </div>;
};

export default MainNotifications;
