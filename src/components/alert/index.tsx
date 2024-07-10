import { Alert as AlertType, useAlertStore } from "@/store/alert";
import React from "react";
import useDictionary from "@/hooks/useDictionary";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle, FaInfo } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { motion } from "framer-motion";

function AlertContainer({
  color,
  children,
  startDecorator,
  endDecorator,
  sx,
}: {
  color: string;
  children: React.ReactNode;
  startDecorator: React.ReactNode;
  endDecorator: React.ReactNode;
  sx: any;
}) {
  return (
    <div
      className={`flex items-center justify-between ${color} border-l-4 ${color} ${color} p-4 rounded-lg`}
      role="alert"
      style={sx}
    >
      <div className="flex items-center">
        <div className="mr-2">{startDecorator}</div>
        <div>
          <p className="font-bold">{children}</p>
        </div>
      </div>
      <div>{endDecorator}</div>
    </div>
  );
}

function IconButton({
  variant,
  color,
  children,
  onClick,
}: {
  variant: string;
  color: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      className={`p-2 rounded-full ${variant} ${color}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function Alert({ message, status }: AlertType) {
  const { alerts } = useDictionary();
  const popAlert = useAlertStore((state) => state.popAlert);

  const removeAlert = () => {
    popAlert({ message, status });
  };

  let AlertComponent = <></>;

  const isSucess =
    status === 200 ||
    status === 201 ||
    status === 202 ||
    status === 203 ||
    status === 204 ||
    status === 205 ||
    status === 206 ||
    status === 207 ||
    status === 208 ||
    status === 226;

  if (isSucess) {
    AlertComponent = (
      <AlertContainer
        color="bg-green-500"
        endDecorator={
          <IconButton
            variant="soft"
            color="bg-green-400 color-green-500"
            onClick={removeAlert}
          >
            <IoClose className="text-2xl" />
          </IconButton>
        }
        startDecorator={<FaCheckCircle className="text-2xl" />}
        sx={{
          gap: "20px",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <div>
          <h3 className="text-lg small:text-base font-bold">
            {alerts.success}
          </h3>
          <p className="text-sm">{alerts.email.success}</p>
        </div>
      </AlertContainer>
    );
  }

  const isWarning =
    status === 400 || status === 401 || status === 403 || status === 404;

  if (isWarning) {
    AlertComponent = (
      <AlertContainer
        color="bg-yellow-500"
        endDecorator={
          <IconButton
            variant="soft"
            color="bg-yellow-400 color-yellow-500"
            onClick={removeAlert}
          >
            <IoClose className="text-2xl" />
          </IconButton>
        }
        startDecorator={<IoIosWarning className="text-2xl" />}
        sx={{
          gap: "20px",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <div>
          <h3 className="text-lg small:text-base font-bold">
            {alerts.warning}
          </h3>
          <p className="text-xs">{message}</p>
        </div>
      </AlertContainer>
    );
  }

  const isError = status === 500 || status === 501 || status === 502;

  if (isError) {
    AlertComponent = (
      <AlertContainer
        color="bg-red-500"
        endDecorator={
          <IconButton
            variant="soft"
            color="bg-red-400 color-red-500"
            onClick={removeAlert}
          >
            <IoClose className="text-2xl" />
          </IconButton>
        }
        startDecorator={<RiErrorWarningFill className="text-2xl" />}
        sx={{
          gap: "20px",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <div>
          <h3 className="text-lg small:text-base font-bold">{alerts.error}</h3>
          <p className="text-sm">{message}</p>
        </div>
      </AlertContainer>
    );
  }

  const isInfo = status === 100 || status === 101;

  if (isInfo) {
    AlertComponent = (
      <AlertContainer
        color="bg-neutral-500"
        endDecorator={
          <IconButton
            variant="soft"
            color="bg-neutral-400 color-neutral-500"
            onClick={removeAlert}
          >
            <IoClose className="text-2xl" />
          </IconButton>
        }
        startDecorator={<FaInfo className="text-2xl" />}
        sx={{
          gap: "20px",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <div>
          <h3 className="text-lg small:text-base font-bold">Informação</h3>
          <p className="text-sm">{message}</p>
        </div>
      </AlertContainer>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.35, delay: 0.5, type: "tween" }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="pointer-events-auto"
    >
      {AlertComponent}
    </motion.div>
  );
}
