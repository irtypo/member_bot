this.run = async (client, message, args) => {
  message.delete();
  message.channel.send(args.join(" "));
};